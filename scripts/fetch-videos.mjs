import { writeFile } from "node:fs/promises";

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = "UCAC3-d9xkkivdGzKZeNV4QQ";
const API_BASE = "https://www.googleapis.com/youtube/v3";

if (!API_KEY) {
  throw new Error(
    "Missing YOUTUBE_API_KEY. Add it under Repository Settings > Secrets and variables > Actions."
  );
}

async function youtubeRequest(endpoint, params) {
  const url = new URL(`${API_BASE}/${endpoint}`);

  Object.entries({ ...params, key: API_KEY }).forEach(([key, value]) => {
    if (value !== "" && value !== undefined && value !== null) {
      url.searchParams.set(key, String(value));
    }
  });

  const response = await fetch(url);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = data?.error?.message || `YouTube API request failed (${response.status})`;
    throw new Error(message);
  }

  return data;
}

function parseISODuration(value = "PT0S") {
  const match = value.match(/P(?:(\d+)D)?T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;

  const [, days = 0, hours = 0, minutes = 0, seconds = 0] = match.map(Number);
  return days * 86400 + hours * 3600 + minutes * 60 + seconds;
}

function chooseThumbnail(snippet, videoId) {
  return (
    snippet?.thumbnails?.maxres?.url ||
    snippet?.thumbnails?.standard?.url ||
    snippet?.thumbnails?.high?.url ||
    snippet?.thumbnails?.medium?.url ||
    snippet?.thumbnails?.default?.url ||
    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
  );
}

async function getUploadsPlaylistId() {
  const data = await youtubeRequest("channels", {
    part: "contentDetails",
    id: CHANNEL_ID,
  });

  const playlistId = data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!playlistId) throw new Error("Could not find the channel uploads playlist.");
  return playlistId;
}

async function getAllPlaylistItems(playlistId) {
  const items = [];
  let pageToken = "";

  do {
    const data = await youtubeRequest("playlistItems", {
      part: "snippet,contentDetails",
      playlistId,
      maxResults: 50,
      pageToken,
    });

    items.push(...(data.items || []));
    pageToken = data.nextPageToken || "";
    console.log(`Collected ${items.length} playlist items...`);
  } while (pageToken);

  return items;
}

async function getDetailsById(videoIds) {
  const details = new Map();

  for (let index = 0; index < videoIds.length; index += 50) {
    const batch = videoIds.slice(index, index + 50);
    const data = await youtubeRequest("videos", {
      part: "contentDetails,statistics",
      id: batch.join(","),
    });

    for (const item of data.items || []) details.set(item.id, item);
    console.log(`Loaded details for ${Math.min(index + 50, videoIds.length)} videos...`);
  }

  return details;
}

const uploadsPlaylistId = await getUploadsPlaylistId();
const playlistItems = await getAllPlaylistItems(uploadsPlaylistId);
const videoIds = playlistItems
  .map((item) => item.contentDetails?.videoId || item.snippet?.resourceId?.videoId)
  .filter(Boolean);
const detailsById = await getDetailsById(videoIds);

// REPLACE THE OLD const videos BLOCK WITH THIS
const videos = playlistItems
  .map((item) => {
    const snippet = item.snippet || {};

    const id =
      item.contentDetails?.videoId ||
      snippet.resourceId?.videoId ||
      "";

    const details = detailsById.get(id) || {};
    const title = snippet.title || "Untitled video";

    const durationSeconds = parseISODuration(
      details.contentDetails?.duration || "PT0S"
    );

    return {
      id,
      title,
      publishedAt: snippet.publishedAt || "",
      thumbnail: chooseThumbnail(snippet, id),
      durationSeconds,
      format: durationSeconds > 180 ? "long" : "short",
      viewCount: Number(details.statistics?.viewCount || 0),
    };
  })
  .filter(
    (video) =>
      video.id &&
      video.title !== "Private video" &&
      video.title !== "Deleted video"
  );

// PUT IT HERE
const longVideoCount = videos.filter(
  (video) => video.format === "long"
).length;

console.log(`Long-form videos found: ${longVideoCount}`);

if (longVideoCount === 0) {
  throw new Error(
    "No long-form videos were detected. YouTube duration data was not loaded."
  );
}

// KEEP OUTPUT BELOW
const output = {
  generatedAt: new Date().toISOString(),
  starterOnly: false,
  channelId: CHANNEL_ID,
  videoCount: videos.length,
  videos,
};

await writeFile(
  "videos.json",
  `${JSON.stringify(output, null, 2)}\n`,
  "utf8"
);

console.log(`Wrote ${videos.length} public videos to videos.json.`);
