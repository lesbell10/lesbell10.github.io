# Lineups10 Rich Video Library

A searchable website that loads and categorises videos directly from the Lineups10 YouTube channel.

## New navigation features

- Rich desktop mega menu
- Mobile category navigation
- Football categories: World Cup, nations, clubs, transfers, best players, history, future squads, and matches
- Hockey categories: NHL teams, best players, historic seasons, since 2000, and future rosters
- Basketball categories: NBA teams, best players, historic seasons, since 2000, and future lineups
- Cross-sport collections by era, future year, topic, and video length
- Dynamic category counts
- Active category heading and breadcrumb
- Search inside the selected category
- Sort by newest, oldest, views, or title
- Automatic duration and view-count retrieval

## Add your API key

Open `app.js` and replace:

```js
API_KEY: "PASTE_YOUR_YOUTUBE_API_KEY_HERE",
```

with your existing YouTube Data API key.

The Lineups10 channel ID is already included:

```text
UCAC3-d9xkkivdGzKZeNV4QQ
```

## Local website restrictions

For VS Code Live Server, allow the ports you use in Google Cloud, such as:

```text
http://127.0.0.1:5500/*
http://localhost:5500/*
http://127.0.0.1:5501/*
http://localhost:5501/*
```

## Run locally

Use the VS Code **Live Server** extension, or run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## How categorisation works

The website analyses each title and assigns:

- A sport: football, hockey, or basketball
- Topics such as World Cup, national teams, clubs, transfers, history, future, best players, and matches
- A length collection using the YouTube duration

Because the categories are generated from video titles, consistent titles produce the best results. You can expand the keyword arrays in `detectSport()` and `detectTags()` inside `app.js`.
