
const WORLD_CONFIG = {
  fifa: {
    title: "FIFA World",
    badge: "FIFA",
    icon: "⚽",
    accent: "#63e58c",
    aliases: ["football", "soccer", "fifa"],
    filters: {
      all: ["all"],
      "world-cup": ["world cup", "national", "nations", "country"],
      clubs: ["club", "arsenal", "barcelona", "real madrid", "man united", "psg"],
      transfers: ["transfer", "rumour", "signing", "move"],
      history: ["historic", "history", "since 2000", "classic", "legend"],
      future: ["future", "2032", "2027", "projected", "potential"],
      best: ["best", "top", "xi", "players"],
      shorts: ["short", "shorts", "vertical"],
      "long-form": ["long form", "long video", "extended"]
    },
    fallback: [
      ["World Cup 2026 Best Players", "world-cup best", 184000, "2026-07-28"],
      ["Top Transfer Rumours | July 2026", "transfers latest", 121000, "2026-07-27"],
      ["Best Arsenal XI Since 2000", "clubs history best", 98000, "2026-07-24"],
      ["Football's Best Players in 2032", "future best", 87000, "2026-07-21"],
      ["Barcelona Potential 2026-27 Squad", "clubs future transfers", 74000, "2026-07-18"],
      ["Every World Cup Champion XI", "world-cup history", 68000, "2026-07-14"],
      ["Top 25 Clubs in 2027", "clubs future best", 59000, "2026-07-10"],
      ["Best Transfers of the 2000s", "transfers history", 52000, "2026-07-05"],
      ["Argentina Best XI 2000-2026", "world-cup history best", 44000, "2026-06-30"]
    ]
  },
  nhl: {
    title: "NHL World",
    badge: "NHL",
    icon: "🏒",
    accent: "#6bbcff",
    aliases: ["hockey", "nhl"],
    filters: {
      all: ["all"],
      teams: ["team", "nhl", "canadiens", "leafs", "oilers", "panthers"],
      trades: ["trade", "transfer", "free agent", "signing"],
      playoffs: ["playoff", "stanley cup", "final"],
      history: ["historic", "history", "since 2000", "classic", "legend"],
      future: ["future", "2032", "2027", "projected", "prospect"],
      best: ["best", "top", "players", "stars"],
      shorts: ["short", "shorts", "vertical"],
      "long-form": ["long form", "long video", "extended"]
    },
    fallback: [
      ["Best NHL Players Since 2000", "best history", 133000, "2026-07-28"],
      ["Top NHL Transfers of 2026", "trades latest", 98000, "2026-07-26"],
      ["Florida Panthers Best Team Since 2000", "teams history best", 84000, "2026-07-23"],
      ["NHL's Best Players in 2032", "future best", 77000, "2026-07-20"],
      ["Every Stanley Cup Champion Since 2000", "playoffs history", 69000, "2026-07-16"],
      ["Montreal Canadiens Potential Roster", "teams future", 61000, "2026-07-12"],
      ["Top 30 NHL Offseason Moves", "trades best", 55000, "2026-07-08"],
      ["Ottawa Senators Every Season Since 2000", "teams history", 47000, "2026-07-03"],
      ["Best NHL Playoff Lineups", "playoffs best", 41000, "2026-06-29"]
    ]
  },
  nba: {
    title: "NBA World",
    badge: "NBA",
    icon: "🏀",
    accent: "#ff9f43",
    aliases: ["basketball", "nba"],
    filters: {
      all: ["all"],
      teams: ["team", "nba", "lakers", "celtics", "warriors", "raptors"],
      transfers: ["trade", "transfer", "free agency", "signing", "offseason"],
      playoffs: ["playoff", "final", "conference final"],
      history: ["historic", "history", "since 2000", "classic", "legend"],
      future: ["future", "2032", "2027", "projected", "potential"],
      best: ["best", "top", "players", "stars"],
      shorts: ["short", "shorts", "vertical"],
      "long-form": ["long form", "long video", "extended"]
    },
    fallback: [
      ["Top NBA Transfers — 2026 Offseason", "transfers latest", 146000, "2026-07-28"],
      ["Best NBA Players Since 2000", "best history", 119000, "2026-07-25"],
      ["Golden State Warriors Best Team Since 2000", "teams history best", 91000, "2026-07-22"],
      ["NBA's Best Players in 2032", "future best", 82000, "2026-07-19"],
      ["Every NBA Champion Since 2000", "playoffs history", 73000, "2026-07-15"],
      ["Philadelphia 76ers Potential Lineup", "teams future transfers", 64000, "2026-07-11"],
      ["Top 30 NBA Offseason Moves", "transfers best", 58000, "2026-07-07"],
      ["Phoenix Suns 2004-05 Starting Five", "teams history", 49000, "2026-07-02"],
      ["Best NBA Finals Lineups", "playoffs best", 43000, "2026-06-27"]
    ]
  }
};

const state = {
  world: document.body.dataset.world,
  allVideos: [],
  filtered: [],
  filters: new Set(),
  query: "",
  visible: 12
};

const config = WORLD_CONFIG[state.world];
const els = {
  grid: document.querySelector("#videoGrid"),
  template: document.querySelector("#videoTemplate"),
  status: document.querySelector("#status"),
  empty: document.querySelector("#emptyState"),
  count: document.querySelector("#videoCount"),
  searchForm: document.querySelector("#searchForm"),
  search: document.querySelector("#searchInput"),
  searchResultCount: document.querySelector("#searchResultCount"),
  clearSearch: document.querySelector("#clearSearch"),
  sort: document.querySelector("#sortSelect"),
  reset: document.querySelector("#resetFilters"),
  loadMore: document.querySelector("#loadMore"),
  filterLabel: document.querySelector("#filterLabel"),
  activeKicker: document.querySelector("#activeKicker"),
  activeTitle: document.querySelector("#activeTitle"),
  activeDescription: document.querySelector("#activeDescription"),
  nav: document.querySelector("#worldNav"),
  mobileToggle: document.querySelector("#mobileToggle")
};

function normalize(text = "") {
  return String(text).toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, " ").replace(/\s+/g, " ").trim();
}

function detectWorld(text) {
  const normalized = normalize(text);
  const hockeySignals = [
    "nhl", "hockey", "boston bruins", "ottawa senators", "montreal canadiens",
    "toronto maple leafs", "chicago blackhawks", "colorado avalanche", "edmonton oilers",
    "calgary flames", "vancouver canucks", "winnipeg jets", "new york rangers",
    "new york islanders", "new jersey devils", "pittsburgh penguins", "philadelphia flyers",
    "washington capitals", "carolina hurricanes", "tampa bay lightning", "florida panthers",
    "buffalo sabres", "detroit red wings", "columbus blue jackets", "nashville predators",
    "minnesota wild", "st louis blues", "dallas stars", "san jose sharks", "anaheim ducks",
    "los angeles kings", "vegas golden knights", "seattle kraken", "arizona coyotes",
    "utah mammoth", "utah hockey club", "phoenix coyotes", "atlanta thrashers",
    "quebec nordiques", "hartford whalers", "mighty ducks of anaheim",
    "la kings", "ny rangers", "ny islanders", "nj devils", "tb lightning", "sj sharks"
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
    "utah jazz", "seattle supersonics", "seattle sonics", "vancouver grizzlies",
    "charlotte bobcats", "new orleans hornets", "washington bullets",
    "la lakers", "la clippers", "okc thunder", "knicks", "sixers"
  ];

  if (basketballSignals.some(signal => normalized.includes(signal))) return "nba";
  if (hockeySignals.some(signal => normalized.includes(signal))) return "nhl";
  return "fifa";
}

function normalizeWorld(value) {
  const world = normalize(value);
  if (["nba", "basketball"].includes(world)) return "nba";
  if (["nhl", "hockey"].includes(world)) return "nhl";
  if (["fifa", "football", "soccer"].includes(world)) return "fifa";
  return "";
}

function formatViews(number = 0) {
  return new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(Number(number) || 0) + " views";
}

function formatDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? ""
    : new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

function durationToSeconds(value = "") {
  const text = String(value).trim();

  const iso = text.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/i);
  if (iso) {
    return (Number(iso[1] || 0) * 3600) + (Number(iso[2] || 0) * 60) + Number(iso[3] || 0);
  }

  const parts = text.split(":").map(Number);
  if (parts.some(Number.isNaN)) return 0;
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return parts[0] || 0;
}

function isShortVideo(video) {
  if (video.format === "short") return true;
  if (video.format === "long") return false;
  const text = normalize(`${video.title} ${video.tags.join(" ")}`);
  if (text.includes("shorts") || text.includes("#shorts") || text.includes("vertical")) return true;
  return video.durationSeconds > 0 && video.durationSeconds <= 180;
}

function isLongFormVideo(video) {
  return !isShortVideo(video);
}

function isGameVideo(video) {
  const text = ` ${normalize(`${video.title} ${video.tags.join(" ")}`)} `;
  const gameSignals = [
    /\bvs\b/,
    /\bversus\b/,
    /\bfriendly\b/,
    /\bmatch(?:day)?\b/,
    /\bgame(?: \d+)?\b/,
    /\bfinals?\b/,
    /\bsemi final\b/,
    /\bquarter final\b/,
    /\bround of (?:16|32|64)\b/,
    /\bplayoffs?\b/,
    /\bchampionship\b/,
    /\bstanley cup\b/
  ];
  return isLongFormVideo(video) && gameSignals.some(pattern => pattern.test(text));
}

function detectVideoFormat(videoId, durationSeconds) {
  return new Promise((resolve) => {
    const image = new Image();
    const fallback = durationSeconds > 180 ? "long" : "short";
    const timeout = window.setTimeout(() => resolve(fallback), 5000);

    image.onload = () => {
      window.clearTimeout(timeout);
      const isVertical = image.naturalHeight > image.naturalWidth;
      resolve(isVertical && durationSeconds <= 180 ? "short" : "long");
    };
    image.onerror = () => {
      window.clearTimeout(timeout);
      resolve(fallback);
    };
    image.src = `https://i.ytimg.com/vi/${videoId}/oar2.jpg`;
  });
}

function makeThumb(title, icon, accent) {
  const safe = title.replace(/[&<>"']/g, "");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#0c1a30"/>
        <stop offset="1" stop-color="#172b49"/>
      </linearGradient>
      <radialGradient id="r" cx="85%" cy="15%">
        <stop stop-color="${accent}" stop-opacity=".5"/>
        <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1280" height="720" fill="url(#g)"/>
    <rect width="1280" height="720" fill="url(#r)"/>
    <text x="78" y="145" font-size="88">${icon}</text>
    <text x="78" y="520" fill="white" font-family="Arial, sans-serif" font-size="61" font-weight="800">${safe.slice(0, 34)}</text>
    <rect x="78" y="570" width="270" height="12" rx="6" fill="${accent}"/>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function mapFallback(item, index) {
  const [title, tags, views, publishedAt] = item;
  return {
    id: `${state.world}-${index + 1}`,
    title,
    tags: tags.split(" "),
    searchText: `${title} ${tags}`.toLowerCase(),
    views,
    publishedAt,
    duration: index % 3 === 0 ? "0:42" : index % 3 === 1 ? "3:45" : "0:51",
    durationSeconds: index % 3 === 0 ? 42 : index % 3 === 1 ? 225 : 51,
    format: index % 3 === 1 ? "long" : "short",
    url: "https://www.youtube.com/@lineups10",
    thumbnail: makeThumb(title, config.icon, config.accent)
  };
}

function extractVideo(raw, index) {
  const title = raw.title || raw.snippet?.title || `Lineups10 video ${index + 1}`;
  const tags = raw.tags || raw.snippet?.tags || [];
  const description = raw.description || raw.snippet?.description || "";
  const searchText = normalize(`${title} ${description} ${Array.isArray(tags) ? tags.join(" ") : tags}`);
  const videoId = raw.videoId || raw.id?.videoId || raw.id || "";
  const publishedAt = raw.publishedAt || raw.snippet?.publishedAt || new Date().toISOString();
  const views = Number(raw.views || raw.viewCount || raw.statistics?.viewCount || 0);
  const duration = raw.duration || raw.contentDetails?.duration || "";
  const durationSeconds = Number(raw.durationSeconds || raw.lengthSeconds || durationToSeconds(duration));
  const thumbnail = raw.thumbnail || raw.thumbnails?.high?.url || raw.snippet?.thumbnails?.high?.url ||
    (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : makeThumb(title, config.icon, config.accent));

  return {
    id: String(videoId || `${state.world}-${index}`),
    title,
    tags: Array.isArray(tags) ? tags : String(tags).split(","),
    searchText,
    world: normalizeWorld(raw.world || raw.sport) || detectWorld(searchText),
    views,
    publishedAt,
    duration: String(duration).replace(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/, (_, h, m, s) =>
      [h, m, s].filter((v, i) => v || i > 0).map(v => String(v || 0).padStart(2, "0")).join(":").replace(/^00:/, "")
    ),
    durationSeconds,
    format: raw.format === "long" || raw.format === "short" ? raw.format : "",
    url: raw.url || (videoId ? `https://www.youtube.com/watch?v=${videoId}` : "https://www.youtube.com/@lineups10"),
    thumbnail
  };
}

function belongsToWorld(video) {
  return video.world === state.world;
}

async function loadVideos() {
  try {
    const publishedLibrary = "https://lesbell10.github.io/videos.json";
    const sources = window.location.hostname === "lesbell10.github.io"
      ? ["./videos.json"]
      : [publishedLibrary, "./videos.json"];
    let payload = null;

    for (const source of sources) {
      try {
        const response = await fetch(source, { cache: "no-store" });
        if (!response.ok) continue;
        payload = await response.json();
        break;
      } catch {
        // Try the local starter library if the published library is unavailable.
      }
    }

    if (!payload) throw new Error("videos.json not found");
    const rawVideos = Array.isArray(payload) ? payload : (payload.videos || payload.items || []);
    const extracted = rawVideos.map(extractVideo);
    const detected = await Promise.all(extracted.map(async video => {
      if (!video.format && video.id) {
        video.format = await detectVideoFormat(video.id, video.durationSeconds);
      }
      return video;
    }));
    const mapped = detected.filter(belongsToWorld);
    if (!mapped.length) throw new Error("No matching videos");
    state.allVideos = mapped;
  } catch {
    state.allVideos = config.fallback.map(mapFallback);
  }
  updateCounts();
  applyFilters();
}

function matchesFilter(video, filter) {
  if (filter === "shorts") return isShortVideo(video);
  if (filter === "long-form") return isLongFormVideo(video);
  if (filter === "games") return isGameVideo(video);

  const keywords = config.filters[filter] || [];
  return keywords.some(keyword => video.searchText.includes(normalize(keyword)));
}

function applyFilters() {
  state.filtered = state.allVideos.filter(video => {
    const matchesQuery = !state.query || video.searchText.includes(state.query);
    const matchesSelectedFilters = [...state.filters].every(filter => matchesFilter(video, filter));
    return matchesQuery && matchesSelectedFilters;
  });

  const sort = els.sort.value;
  state.filtered.sort((a, b) => {
    if (sort === "oldest") return new Date(a.publishedAt) - new Date(b.publishedAt);
    if (sort === "views") return b.views - a.views;
    if (sort === "title") return a.title.localeCompare(b.title);
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });

  render();
  updateHeading();
}

function render() {
  els.grid.replaceChildren();
  const visibleVideos = state.filtered.slice(0, state.visible);

  visibleVideos.forEach(video => {
    const node = els.template.content.cloneNode(true);
    const card = node.querySelector(".video-card");
    const thumbLink = node.querySelector(".thumbnail-link");
    const image = node.querySelector(".thumbnail");
    const title = node.querySelector(".video-title");
    const watch = node.querySelector(".watch-link");

    thumbLink.href = video.url;
    watch.href = video.url;
    image.src = video.thumbnail;
    image.alt = `${video.title} thumbnail`;
    title.textContent = video.title;
    node.querySelector(".sport-badge").textContent = `${config.icon} ${config.badge}`;
    const durationBadge = node.querySelector(".duration-badge");
    durationBadge.textContent = video.duration || "";
    durationBadge.classList.toggle("hidden", !video.duration);
    node.querySelector(".published-date").textContent = formatDate(video.publishedAt);
    node.querySelector(".view-count").textContent = formatViews(video.views);

    const tagRow = node.querySelector(".tag-row");
    video.tags.slice(0, 4).forEach(tag => {
      const chip = document.createElement("span");
      chip.textContent = String(tag).replace(/-/g, " ");
      tagRow.append(chip);
    });

    els.grid.append(card);
  });

  const hasResults = state.filtered.length > 0;
  els.status.classList.add("hidden");
  els.empty.classList.toggle("hidden", hasResults);
  els.count.textContent = `${state.filtered.length} video${state.filtered.length === 1 ? "" : "s"}`;
  els.searchResultCount.textContent =
    `${state.filtered.length} video${state.filtered.length === 1 ? "" : "s"} found`;
  els.searchResultCount.classList.toggle("hidden", !state.query);
  els.loadMore.classList.toggle("hidden", state.visible >= state.filtered.length);
  els.reset.classList.toggle("hidden", state.filters.size === 0 && !state.query);
  els.clearSearch.classList.toggle("hidden", !state.query);
}

function updateCounts() {
  document.querySelectorAll("[data-count]").forEach(el => {
    const key = el.dataset.count;
    const total = state.allVideos.filter(video => {
      if (key === "all") return true;
      if (key === "shorts") return isShortVideo(video);
      if (key === "long-form") return isLongFormVideo(video);
      if (key === "games") return isGameVideo(video);

      const keywords = config.filters[key] || [];
      return keywords.some(keyword => video.searchText.includes(normalize(keyword)));
    }).length;
    el.textContent = total;
  });
}

function updateHeading() {
  const selectedFilters = [...state.filters];
  const labels = selectedFilters.map(filter => {
    const card = [...document.querySelectorAll(`[data-filter="${filter}"]`)]
      .find(button => button.querySelector("strong"));
    return card?.querySelector("strong")?.textContent ||
      filter.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  });
  const label = labels.length ? labels.join(" + ") : `All ${config.title} Videos`;

  els.filterLabel.textContent = labels.length ? labels.join(" + ") : "All videos";
  els.activeKicker.textContent = state.query
    ? `Search: “${els.search.value.trim()}”`
    : (labels.length ? "Selected collections" : "Complete world");
  els.activeTitle.textContent = label;
  els.activeDescription.textContent = state.query
    ? `${state.filtered.length} result${state.filtered.length === 1 ? "" : "s"} matching your search.`
    : `Browse ${label.toLowerCase()} in the Lineups10 ${config.title}.`;

  document.querySelectorAll("[data-filter]").forEach(button => {
    const isAll = button.dataset.filter === "all";
    const active = isAll ? state.filters.size === 0 : state.filters.has(button.dataset.filter);
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setFilter(filter) {
  if (filter === "all") {
    state.filters.clear();
  } else if (state.filters.has(filter)) {
    state.filters.delete(filter);
  } else {
    if (filter === "shorts") state.filters.delete("long-form");
    if (filter === "long-form") state.filters.delete("shorts");
    state.filters.add(filter);
  }
  state.visible = 12;
  applyFilters();
  document.querySelector(".library")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("click", event => {
  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) setFilter(filterButton.dataset.filter);
});

els.search.addEventListener("input", () => {
  state.query = normalize(els.search.value);
  state.visible = 12;
  applyFilters();
});

els.searchForm.addEventListener("submit", event => {
  event.preventDefault();
  state.query = normalize(els.search.value);
  state.visible = 12;
  applyFilters();
  document.querySelector(".library")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

els.clearSearch.addEventListener("click", () => {
  els.search.value = "";
  state.query = "";
  applyFilters();
  els.search.focus();
});

els.reset.addEventListener("click", () => {
  state.filters.clear();
  state.query = "";
  state.visible = 12;
  els.search.value = "";
  applyFilters();
});

els.sort.addEventListener("change", applyFilters);
els.loadMore.addEventListener("click", () => {
  state.visible += 12;
  render();
});

els.mobileToggle.addEventListener("click", () => {
  const open = els.nav.classList.toggle("open");
  els.mobileToggle.setAttribute("aria-expanded", String(open));
});

document.querySelector(`[data-world-link="${state.world}"]`)?.classList.add("active");

loadVideos();
