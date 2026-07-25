const CONFIG = {
  // Create an API key in Google Cloud, then paste it between the quotation marks.
  API_KEY: "AIzaSyAUgER7i3ENGo9aRmDhEuz-ct_2UJ1JS80",

  // Lineups10 channel ID
  CHANNEL_ID: "UCAC3-d9xkkivdGzKZeNV4QQ",

  RESULTS_PER_PAGE: 50,
};

const FILTERS = {
  all: {
    eyebrow: "Complete library",
    title: "All Videos",
    description: "Every currently loaded public video from Lineups10.",
    predicate: () => true,
  },
  latest: {
    eyebrow: "Recently published",
    title: "Latest Uploads",
    description: "The newest videos currently loaded from the channel.",
    predicate: () => true,
    sort: "newest",
  },
  football: sportFilter("football", "Football", "Clubs, nations, tournaments, transfers, historic teams, and future squads."),
  hockey: sportFilter("hockey", "Hockey", "NHL teams, hockey legends, historic seasons, and projected rosters."),
  basketball: sportFilter("basketball", "Basketball", "NBA teams, basketball stars, historic seasons, and future lineups."),
  best: tagFilter("best", "Best Players & XI", "Rankings, best players, top lineups, and dream teams across all sports."),
  transfers: tagFilter("transfers", "Transfers & Rumours", "Transfer news, completed moves, rumours, and potential signings."),
  history: tagFilter("history", "Historic Eras", "Past seasons, classic teams, legends, and era-based collections."),
  future: tagFilter("future", "Future Squads", "Potential teams, projected lineups, and future-season predictions."),
  matches: tagFilter("matches", "Finals & Matches", "Finals, knockout rounds, matchups, and tournament results."),
  "format-short": {
    eyebrow: "By video length",
    title: "Short & Quick Videos",
    description: "Videos lasting three minutes or less.",
    predicate: (video) => video.format === "short",
  },
  "format-long": {
    eyebrow: "By video length",
    title: "Long-Form Videos",
    description: "Videos longer than three minutes.",
    predicate: (video) => video.format === "long",
  },
  "football-since-2000": sportAndTextFilter("football", "since 2000", "Football Since 2000", "Football clubs, players, and lineups from the 2000s to today."),
  "football-every-season": combinedFilter("football", "every-season", "Football Every Season", "Year-by-year football club and national-team collections."),
  "football-era-1990": sportAndTextFilter("football", "1990-2000", "Football 1990–2000", "Football players and teams from the 1990–2000 era."),
  "football-2026": sportAndTextFilter("football", "2026-27", "Football 2026–27", "Football squads, transfers, and projections for 2026–27."),
  "football-2032": sportAndTextFilter("football", "2032", "Football Projected in 2032", "Future national teams and football player projections for 2032."),
  "hockey-short": sportFormatFilter("hockey", "short", "Quick Hockey Videos", "Hockey videos lasting three minutes or less."),
  "hockey-long": sportFormatFilter("hockey", "long", "Long-Form Hockey Videos", "Hockey videos longer than three minutes."),
  "hockey-2026": sportAndTextFilter("hockey", "2026-27", "Hockey 2026–27", "NHL and hockey projections for the 2026–27 season."),
  "hockey-every-season": combinedFilter("hockey", "every-season", "Hockey Every Season", "Season-by-season NHL and hockey collections."),
  "hockey-era-1990": sportAndTextFilter("hockey", "1990-2000", "Hockey 1990–2000", "Hockey players and teams from the 1990–2000 era."),
  "basketball-short": sportFormatFilter("basketball", "short", "Quick Basketball Videos", "Basketball videos lasting three minutes or less."),
  "basketball-long": sportFormatFilter("basketball", "long", "Long-Form Basketball Videos", "Basketball videos longer than three minutes."),
  "basketball-2026": sportAndTextFilter("basketball", "2026-27", "Basketball 2026–27", "NBA and basketball projections for the 2026–27 season."),
  "basketball-every-season": combinedFilter("basketball", "every-season", "Basketball Every Season", "Season-by-season NBA and basketball collections."),
  "basketball-era-1990": sportAndTextFilter("basketball", "1990-2000", "Basketball 1990–2000", "Basketball players and teams from the 1990–2000 era."),
  "football-world-cup": combinedFilter("football", "world-cup", "World Cup", "World Cup teams, players, rankings, finals, and tournament lineups."),
  "football-nations": combinedFilter("football", "nations", "National Teams", "Country lineups, international squads, and national-team rankings."),
  "football-tournaments": combinedFilter("football", "tournaments", "Football Tournaments", "World Cup, Euro, Copa, and other international tournament videos."),
  "football-matches": combinedFilter("football", "matches", "Football Finals & Matches", "Football finals, knockout games, matchups, and tournament results."),
  "football-clubs": combinedFilter("football", "teams", "Football Clubs", "Club lineups, club legends, season squads, and team rankings."),
  "football-best": combinedFilter("football", "best", "Football Best Players & XI", "Top football players, best XIs, rankings, and dream lineups."),
  "football-history": combinedFilter("football", "history", "Historic Football", "Classic clubs, legendary national teams, and football eras."),
  "football-transfers": combinedFilter("football", "transfers", "Football Transfers & Rumours", "Completed transfers, rumours, potential moves, and new squads."),
  "football-future": combinedFilter("football", "future", "Future Football Squads", "Potential club squads and projected national teams."),
  "hockey-teams": combinedFilter("hockey", "teams", "NHL Teams", "NHL franchise lineups, team legends, and season rosters."),
  "hockey-best": combinedFilter("hockey", "best", "Hockey Best Players", "Best NHL players, hockey rankings, and all-time lineups."),
  "hockey-history": combinedFilter("hockey", "history", "Historic Hockey Seasons", "Classic NHL seasons, past rosters, and hockey eras."),
  "hockey-since-2000": sportAndTextFilter("hockey", "since 2000", "Hockey Since 2000", "NHL teams and players from the 2000s to today."),
  "hockey-future": combinedFilter("hockey", "future", "Future Hockey Rosters", "Potential NHL lineups and future player projections."),
  "basketball-teams": combinedFilter("basketball", "teams", "NBA Teams", "NBA franchise lineups, team legends, and season rosters."),
  "basketball-best": combinedFilter("basketball", "best", "Basketball Best Players", "Best NBA players, basketball rankings, and all-time lineups."),
  "basketball-history": combinedFilter("basketball", "history", "Historic Basketball Seasons", "Classic NBA seasons, legendary teams, and past eras."),
  "basketball-since-2000": sportAndTextFilter("basketball", "since 2000", "Basketball Since 2000", "NBA teams and players from the 2000s to today."),
  "basketball-future": combinedFilter("basketball", "future", "Future Basketball Lineups", "Potential NBA teams and future player projections."),
  "since-2000": textFilter("since 2000", "Best Since 2000", "Club, NHL, NBA, and player collections covering the era since 2000."),
  "every-season": tagFilter("every-season", "Every Season", "Year-by-year and season-by-season team or player collections."),
  "era-1990": textFilter("1990-2000", "1990–2000", "Players and teams from the 1990–2000 era."),
  "season-2026": textFilter("2026-27", "2026–27", "Potential squads, projected teams, and season content for 2026–27."),
  "year-2032": textFilter("2032", "Projected in 2032", "Future national teams and player projections for 2032."),
};

const state = {
  uploadsPlaylistId: "",
  nextPageToken: "",
  videos: [],
  activeFilter: "all",
  searchTerm: "",
  searchLoadTimer: null,
  searchLoadRequested: false,
  sortMode: "newest",
  isLoading: false,
  activeMenu: "",
};

const elements = {
  setupPanel: document.querySelector("#setupPanel"),
  loadingOverlay: document.querySelector("#loadingOverlay"),
  searchInput: document.querySelector("#searchInput"),
  clearSearchButton: document.querySelector("#clearSearchButton"),
  videoCount: document.querySelector("#videoCount"),
  status: document.querySelector("#status"),
  videoGrid: document.querySelector("#videoGrid"),
  emptyState: document.querySelector("#emptyState"),
  loadMoreButton: document.querySelector("#loadMoreButton"),
  loadAllButton: document.querySelector("#loadAllButton"),
  clearFilterButton: document.querySelector("#clearFilterButton"),
  sortSelect: document.querySelector("#sortSelect"),
  activeFilterEyebrow: document.querySelector("#activeFilterEyebrow"),
  activeFilterTitle: document.querySelector("#activeFilterTitle"),
  activeFilterDescription: document.querySelector("#activeFilterDescription"),
  filterPathLabel: document.querySelector("#filterPathLabel"),
  template: document.querySelector("#videoCardTemplate"),
  megaMenu: document.querySelector("#megaMenu"),
  primaryNav: document.querySelector("#primaryNav"),
  mobileNavToggle: document.querySelector("#mobileNavToggle"),
};

function sportFilter(sport, title, description) {
  return {
    eyebrow: "Browse by sport",
    title,
    description,
    predicate: (video) => video.sport === sport,
  };
}

function tagFilter(tag, title, description) {
  return {
    eyebrow: "Browse by topic",
    title,
    description,
    predicate: (video) => video.tags.includes(tag),
  };
}

function combinedFilter(sport, tag, title, description) {
  return {
    eyebrow: `Browse ${sport}`,
    title,
    description,
    predicate: (video) => video.sport === sport && video.tags.includes(tag),
  };
}

function textFilter(text, title, description) {
  return {
    eyebrow: "Browse collection",
    title,
    description,
    predicate: (video) => video.normalizedTitle.includes(text),
  };
}

function sportAndTextFilter(sport, text, title, description) {
  return {
    eyebrow: `Browse ${sport}`,
    title,
    description,
    predicate: (video) => video.sport === sport && video.normalizedTitle.includes(text),
  };
}

function sportFormatFilter(sport, format, title, description) {
  return {
    eyebrow: `Browse ${sport}`,
    title,
    description,
    predicate: (video) => video.sport === sport && video.format === format,
  };
}

function hasApiKey() {
  return CONFIG.API_KEY && CONFIG.API_KEY !== "PASTE_YOUR_YOUTUBE_API_KEY_HERE";
}

async function youtubeRequest(endpoint, params) {
  const url = new URL(`https://www.googleapis.com/youtube/v3/${endpoint}`);

  Object.entries({ ...params, key: CONFIG.API_KEY }).forEach(([key, value]) => {
    if (value !== "" && value !== undefined && value !== null) {
      url.searchParams.set(key, value);
    }
  });

  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const apiMessage = errorData?.error?.message || `YouTube request failed (${response.status})`;
    throw new Error(apiMessage);
  }

  return response.json();
}

async function getUploadsPlaylistId() {
  const data = await youtubeRequest("channels", {
    part: "contentDetails",
    id: CONFIG.CHANNEL_ID,
  });

  const playlistId = data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

  if (!playlistId) {
    throw new Error("The channel uploads playlist could not be found.");
  }

  state.uploadsPlaylistId = playlistId;
}

async function getVideoDetails(videoIds) {
  if (!videoIds.length) return new Map();

  const data = await youtubeRequest("videos", {
    part: "contentDetails,statistics",
    id: videoIds.join(","),
  });

  return new Map((data.items || []).map((item) => [item.id, item]));
}

async function processPlaylistItems(items) {
  const videoIds = items
    .map((item) => item.contentDetails?.videoId || item.snippet?.resourceId?.videoId)
    .filter(Boolean);

  const details = await getVideoDetails(videoIds);

  return items
    .map((item) => createVideoObject(item, details.get(item.contentDetails?.videoId || item.snippet?.resourceId?.videoId)))
    .filter((video) => video.id && video.title !== "Private video" && video.title !== "Deleted video");
}

async function loadNextPage() {
  if (state.isLoading) return;

  state.isLoading = true;
  setButtonsLoading(true);
  elements.status.textContent = "Loading videos and category information...";

  try {
    if (!state.uploadsPlaylistId) await getUploadsPlaylistId();

    const data = await youtubeRequest("playlistItems", {
      part: "snippet,contentDetails",
      playlistId: state.uploadsPlaylistId,
      maxResults: CONFIG.RESULTS_PER_PAGE,
      pageToken: state.nextPageToken,
    });

    const incomingVideos = await processPlaylistItems(data.items || []);
    addUniqueVideos(incomingVideos);
    state.nextPageToken = data.nextPageToken || "";

    renderAll();
    updateControls();

    elements.status.textContent = state.nextPageToken
      ? `${state.videos.length.toLocaleString()} videos loaded. Load more to expand every category.`
      : `All ${state.videos.length.toLocaleString()} available public videos loaded.`;
  } catch (error) {
    console.error(error);
    elements.status.textContent = `Error: ${error.message}`;
  } finally {
    state.isLoading = false;
    setButtonsLoading(false);

    if (state.searchLoadRequested && state.searchTerm && state.nextPageToken) {
      state.searchLoadRequested = false;
      loadAllVideos();
    }
  }
}

async function loadAllVideos() {
  if (state.isLoading) {
    state.searchLoadRequested = true;
    return;
  }

  state.searchLoadRequested = false;
  state.isLoading = true;
  setButtonsLoading(true);

  try {
    if (!state.uploadsPlaylistId) await getUploadsPlaylistId();

    do {
      elements.status.textContent =
        `Building your complete category library... ${state.videos.length.toLocaleString()} videos loaded`;

      const data = await youtubeRequest("playlistItems", {
        part: "snippet,contentDetails",
        playlistId: state.uploadsPlaylistId,
        maxResults: CONFIG.RESULTS_PER_PAGE,
        pageToken: state.nextPageToken,
      });

      const incomingVideos = await processPlaylistItems(data.items || []);
      addUniqueVideos(incomingVideos);
      state.nextPageToken = data.nextPageToken || "";
      renderAll();

      await new Promise((resolve) => setTimeout(resolve, 90));
    } while (state.nextPageToken);

    elements.status.textContent =
      `All ${state.videos.length.toLocaleString()} available public videos loaded and categorized.`;
    updateControls();
  } catch (error) {
    console.error(error);
    elements.status.textContent = `Error: ${error.message}`;
  } finally {
    state.isLoading = false;
    setButtonsLoading(false);
  }
}

function createVideoObject(item, details = {}) {
  const snippet = item.snippet || {};
  const id = item.contentDetails?.videoId || snippet.resourceId?.videoId || "";
  const title = snippet.title || "Untitled video";
  const normalizedTitle = normalizeTitle(title);
  const durationSeconds = parseISODuration(details.contentDetails?.duration || "PT0S");
  const sport = detectSport(normalizedTitle);
  const tags = detectTags(normalizedTitle, sport);

  return {
    id,
    title,
    normalizedTitle,
    publishedAt: snippet.publishedAt || "",
    publishedTimestamp: snippet.publishedAt ? new Date(snippet.publishedAt).getTime() : 0,
    thumbnail:
      snippet.thumbnails?.maxres?.url ||
      snippet.thumbnails?.standard?.url ||
      snippet.thumbnails?.high?.url ||
      snippet.thumbnails?.medium?.url ||
      snippet.thumbnails?.default?.url ||
      `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    url: `https://www.youtube.com/watch?v=${id}`,
    sport,
    tags,
    durationSeconds,
    format: durationSeconds > 180 ? "long" : "short",
    viewCount: Number(details.statistics?.viewCount || 0),
  };
}

function addUniqueVideos(incomingVideos) {
  const knownIds = new Set(state.videos.map((video) => video.id));

  incomingVideos.forEach((video) => {
    if (!knownIds.has(video.id)) {
      state.videos.push(video);
      knownIds.add(video.id);
    }
  });
}

function normalizeTitle(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function detectSport(title) {
  const hockeySignals = [
    "nhl", "hockey", "boston bruins", "ottawa senators", "montreal canadiens",
    "toronto maple leafs", "chicago blackhawks", "colorado avalanche", "edmonton oilers",
    "calgary flames", "vancouver canucks", "winnipeg jets", "new york rangers",
    "new york islanders", "new jersey devils", "pittsburgh penguins", "philadelphia flyers",
    "washington capitals", "carolina hurricanes", "tampa bay lightning", "florida panthers",
    "buffalo sabres", "detroit red wings", "columbus blue jackets", "nashville predators",
    "minnesota wild", "st louis blues", "dallas stars", "san jose sharks", "anaheim ducks",
    "los angeles kings", "vegas golden knights", "seattle kraken", "arizona coyotes",
  ];

  const basketballSignals = [
    "nba", "basketball", "los angeles lakers", "boston celtics", "chicago bulls",
    "golden state warriors", "san antonio spurs", "oklahoma city thunder", "phoenix suns",
    "brooklyn nets", "new jersey nets", "new york knicks", "toronto raptors", "miami heat",
    "dallas mavericks", "houston rockets", "la clippers", "los angeles clippers",
    "denver nuggets", "milwaukee bucks", "cleveland cavaliers", "detroit pistons",
    "indiana pacers", "atlanta hawks", "charlotte hornets", "orlando magic",
    "washington wizards", "minnesota timberwolves", "new orleans pelicans",
    "memphis grizzlies", "portland trail blazers", "philadelphia 76ers", "sacramento kings",
  ];

  if (basketballSignals.some((word) => title.includes(word))) return "basketball";
  if (hockeySignals.some((word) => title.includes(word))) return "hockey";
  return "football";
}

function detectTags(title, sport) {
  const tags = new Set();

  if (/best|top |greatest| xi|lineup|players|legends/.test(title)) tags.add("best");
  if (/transfer|rumour|rumor|signing|signed|done/.test(title)) tags.add("transfers");
  if (/potential|projected|future|2032|2035|2026-27|2027/.test(title)) tags.add("future");
  if (/since 2000|1990-2000|2000-2005|2005-2010|2010-2015|2015-2020|2020-2025|historic|history|classic|legend/.test(title)) tags.add("history");
  if (/every season|each season|season by season/.test(title)) tags.add("every-season");
  if (/final|semi-final|semifinal|quarter-final|quarterfinal| vs | match|3rd place|4th place|round of/.test(` ${title} `)) tags.add("matches");
  if (/world cup|wc26|wc 2026/.test(title)) tags.add("world-cup");
  if (/world cup|euro |copa |nations league|tournament/.test(title)) tags.add("tournaments");

  if (sport === "football") {
    const nationSignals = [
      "argentina", "belgium", "brazil", "canada", "colombia", "croatia", "england", "france",
      "germany", "ghana", "italy", "mexico", "netherlands", "norway", "portugal", "spain",
      "sweden", "united states", "uruguay", "national team", "nations", "country", "world cup",
    ];
    const clubSignals = [
      "ac milan", "ajax", "arsenal", "as roma", "aston villa", "atalanta", "athletic bilbao",
      "atletico madrid", "barcelona", "bayer leverkusen", "bayern", "benfica", "borussia dortmund",
      "chelsea", "crystal palace", "everton", "fenerbahce", "fiorentina", "galatasaray", "inter",
      "juventus", "lazio", "leeds", "leicester", "liverpool", "lyon", "man city", "manchester city",
      "man utd", "manchester united", "marseille", "monaco", "napoli", "newcastle", "psg",
      "real madrid", "real sociedad", "sevilla", "sporting", "tottenham", "valencia", "villarreal",
    ];

    if (nationSignals.some((word) => title.includes(word))) tags.add("nations");
    if (clubSignals.some((word) => title.includes(word))) tags.add("teams");
  } else {
    tags.add("teams");
  }

  return [...tags];
}

function parseISODuration(duration) {
  const match = duration.match(/P(?:([\d.]+)D)?T?(?:([\d.]+)H)?(?:([\d.]+)M)?(?:([\d.]+)S)?/);
  if (!match) return 0;

  const days = Number(match[1] || 0);
  const hours = Number(match[2] || 0);
  const minutes = Number(match[3] || 0);
  const seconds = Number(match[4] || 0);

  return Math.round(days * 86400 + hours * 3600 + minutes * 60 + seconds);
}

function getFilteredVideos() {
  const filter = FILTERS[state.activeFilter] || FILTERS.all;
  const search = state.searchTerm;

  const videos = state.videos.filter((video) => {
    const matchesFilter = filter.predicate(video);
    const matchesSearch = !search || video.normalizedTitle.includes(search);
    return matchesFilter && matchesSearch;
  });

  const selectedSort = filter.sort || state.sortMode;
  return sortVideos(videos, selectedSort);
}

function sortVideos(videos, sortMode) {
  return [...videos].sort((a, b) => {
    if (sortMode === "oldest") return a.publishedTimestamp - b.publishedTimestamp;
    if (sortMode === "views") return b.viewCount - a.viewCount;
    if (sortMode === "title") return a.title.localeCompare(b.title);
    return b.publishedTimestamp - a.publishedTimestamp;
  });
}

function renderAll() {
  renderVideos();
  renderFilterHeading();
  renderCategoryCounts();
  renderActiveStates();
}

function renderVideos() {
  const videos = getFilteredVideos();
  const fragment = document.createDocumentFragment();

  elements.videoGrid.replaceChildren();

  videos.forEach((video) => {
    const card = elements.template.content.cloneNode(true);
    const thumbnailLink = card.querySelector(".thumbnail-link");
    const thumbnail = card.querySelector(".thumbnail");
    const sportBadge = card.querySelector(".sport-badge");
    const durationBadge = card.querySelector(".duration-badge");
    const date = card.querySelector(".published-date");
    const viewCount = card.querySelector(".view-count");
    const title = card.querySelector(".video-title");
    const tagRow = card.querySelector(".tag-row");
    const watchLink = card.querySelector(".watch-link");

    thumbnailLink.href = video.url;
    thumbnail.src = video.thumbnail;
    thumbnail.alt = `${video.title} thumbnail`;

    sportBadge.textContent = video.sport;
    durationBadge.textContent = formatDuration(video.durationSeconds);
    date.textContent = formatDate(video.publishedAt);
    viewCount.textContent = `${video.viewCount.toLocaleString()} views`;
    title.textContent = video.title;

    getDisplayTags(video).forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.className = "video-tag";
      tagElement.textContent = tag.replaceAll("-", " ");
      tagRow.appendChild(tagElement);
    });

    watchLink.href = video.url;
    watchLink.setAttribute("aria-label", `Watch ${video.title} on YouTube`);

    fragment.appendChild(card);
  });

  elements.videoGrid.appendChild(fragment);
  elements.videoCount.textContent =
    `${videos.length.toLocaleString()} shown · ${state.videos.length.toLocaleString()} loaded`;

  elements.emptyState.classList.toggle("hidden", videos.length !== 0);
}

function getDisplayTags(video) {
  const priority = ["world-cup", "transfers", "future", "history", "best", "matches", "nations", "teams"];
  const selected = priority.filter((tag) => video.tags.includes(tag)).slice(0, 2);
  return selected.length ? selected : [video.format];
}

function renderFilterHeading() {
  const filter = FILTERS[state.activeFilter] || FILTERS.all;
  elements.activeFilterEyebrow.textContent = state.searchTerm ? "Search results" : filter.eyebrow;
  elements.activeFilterTitle.textContent = state.searchTerm
    ? `Results for “${elements.searchInput.value.trim()}”`
    : filter.title;
  elements.activeFilterDescription.textContent = state.searchTerm
    ? `Showing matches inside ${filter.title}.`
    : filter.description;
  elements.filterPathLabel.textContent = filter.title;

  const hasActiveSelection = state.activeFilter !== "all" || Boolean(state.searchTerm);
  elements.clearFilterButton.classList.toggle("hidden", !hasActiveSelection);
  elements.clearSearchButton.classList.toggle("hidden", !state.searchTerm);
}

function renderCategoryCounts() {
  document.querySelectorAll("[data-count-filter]").forEach((counter) => {
    const key = counter.dataset.countFilter;
    const filter = FILTERS[key];
    const count = filter ? state.videos.filter(filter.predicate).length : 0;
    counter.textContent = count.toLocaleString();
  });
}

function renderActiveStates() {
  document.querySelectorAll("[data-filter-key]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filterKey === state.activeFilter);
  });
}

function applyFilter(filterKey, { preserveSearch = false, scroll = true } = {}) {
  if (!FILTERS[filterKey]) return;

  state.activeFilter = filterKey;
  if (!preserveSearch) {
    state.searchTerm = "";
    elements.searchInput.value = "";
  }

  const filterSort = FILTERS[filterKey].sort;
  if (filterSort) {
    state.sortMode = filterSort;
    elements.sortSelect.value = filterSort;
  }

  renderAll();
  closeMegaMenu();
  closeMobileNav();

  if (scroll) {
    document.querySelector("#library").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

function formatDuration(totalSeconds) {
  if (!totalSeconds) return "—";
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return hours
    ? `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    : `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function updateControls() {
  const hasMore = Boolean(state.nextPageToken);
  elements.loadMoreButton.classList.toggle("hidden", !hasMore);
  elements.loadAllButton.classList.toggle("hidden", !hasMore);
}

function setButtonsLoading(isLoading) {
  elements.loadMoreButton.disabled = isLoading;
  elements.loadAllButton.disabled = isLoading;
  elements.loadingOverlay.classList.toggle("hidden", !isLoading);
  elements.loadingOverlay.setAttribute("aria-busy", String(isLoading));
}

function openMegaMenu(menuName) {
  const isSameMenuOpen = state.activeMenu === menuName && elements.megaMenu.classList.contains("open");
  if (isSameMenuOpen) {
    closeMegaMenu();
    return;
  }

  state.activeMenu = menuName;
  elements.megaMenu.classList.add("open");

  document.querySelectorAll("[data-menu-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.menuPanel === menuName);
  });

  document.querySelectorAll("[data-menu-target]").forEach((button) => {
    const active = button.dataset.menuTarget === menuName;
    button.classList.toggle("active", active);
    button.setAttribute("aria-expanded", String(active));
  });
}

function closeMegaMenu() {
  state.activeMenu = "";
  elements.megaMenu.classList.remove("open");
  document.querySelectorAll("[data-menu-panel]").forEach((panel) => panel.classList.remove("active"));
  document.querySelectorAll("[data-menu-target]").forEach((button) => {
    button.classList.remove("active");
    button.setAttribute("aria-expanded", "false");
  });
}

function closeMobileNav() {
  elements.primaryNav.classList.remove("mobile-open");
  elements.mobileNavToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

document.addEventListener("click", (event) => {
  const filterButton = event.target.closest("[data-filter-key]");
  if (filterButton) {
    applyFilter(filterButton.dataset.filterKey);
    return;
  }

  const menuButton = event.target.closest("[data-menu-target]");
  if (menuButton) {
    openMegaMenu(menuButton.dataset.menuTarget);
    return;
  }

  if (!event.target.closest(".site-header")) closeMegaMenu();
});

elements.searchInput.addEventListener("input", (event) => {
  state.searchTerm = normalizeTitle(event.target.value);
  renderAll();

  clearTimeout(state.searchLoadTimer);
  if (state.searchTerm && (state.nextPageToken || state.isLoading)) {
    state.searchLoadTimer = setTimeout(() => {
      loadAllVideos();
    }, 350);
  }
});

elements.clearSearchButton.addEventListener("click", () => {
  clearTimeout(state.searchLoadTimer);
  state.searchLoadRequested = false;
  state.searchTerm = "";
  elements.searchInput.value = "";
  renderAll();
  elements.searchInput.focus();
});

elements.clearFilterButton.addEventListener("click", () => applyFilter("all"));
elements.sortSelect.addEventListener("change", (event) => {
  state.sortMode = event.target.value;
  renderVideos();
});
elements.loadMoreButton.addEventListener("click", loadNextPage);
elements.loadAllButton.addEventListener("click", loadAllVideos);

elements.mobileNavToggle.addEventListener("click", () => {
  const willOpen = !elements.primaryNav.classList.contains("mobile-open");
  elements.primaryNav.classList.toggle("mobile-open", willOpen);
  elements.mobileNavToggle.setAttribute("aria-expanded", String(willOpen));
  document.body.classList.toggle("menu-open", willOpen);
  if (!willOpen) closeMegaMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMegaMenu();
    closeMobileNav();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 850) closeMobileNav();
});

async function init() {
  renderAll();

  if (!hasApiKey()) {
    elements.setupPanel.classList.remove("hidden");
    elements.status.textContent = "Add your YouTube API key in app.js to load your videos.";
    return;
  }

  await loadNextPage();
}

init();
