# Lineups10 — GitHub Pages Video Library

This version is built specifically for GitHub Pages.

It does **not** expose the YouTube API key in browser JavaScript. A GitHub Actions workflow retrieves the channel videos, creates `videos.json`, and deploys the finished website.

## Repository structure

Upload these files and folders directly to the repository root:

```text
.github/
.nojekyll
scripts/
app.js
index.html
style.css
videos.json
README.md
```

Do not upload the outer downloaded folder as one nested folder. `index.html` must appear at the top level of the repository.

## GitHub setup

### 1. Upload the files

Create a repository or open your existing website repository. Upload the **contents** of this folder to the repository root and commit them to the `main` branch.

### 2. Add the YouTube API key as a secret

In the repository, open:

```text
Settings → Secrets and variables → Actions → New repository secret
```

Use this exact name:

```text
YOUTUBE_API_KEY
```

Paste your YouTube Data API v3 key as the value.

Because the key is stored as a GitHub secret and used by GitHub Actions, it is not published in `app.js` or shown to website visitors.

In Google Cloud, restrict the key to **YouTube Data API v3**. An HTTP-referrer restriction is not needed for this Actions-based version.

### 3. Select GitHub Actions for Pages

Open:

```text
Settings → Pages
```

Under **Build and deployment**, set **Source** to:

```text
GitHub Actions
```

### 4. Run the workflow

Open:

```text
Actions → Update YouTube videos and deploy Pages → Run workflow
```

The workflow will:

1. Retrieve all public Lineups10 uploads.
2. Create a complete `videos.json` file.
3. Categorise them in the website.
4. Deploy the site to GitHub Pages.

The workflow also refreshes the deployed video library every six hours.

## GitHub Pages address

For a project repository, the address normally looks like:

```text
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
```

For a repository named `YOUR-USERNAME.github.io`, the address is:

```text
https://YOUR-USERNAME.github.io/
```

## Starter data

The included `videos.json` contains a small starter selection so the navigation works immediately. The first successful workflow run replaces it in the deployed website with the complete channel library.

## Common errors

### 404 page

Make sure `index.html` is at the repository root and that Pages is configured to use GitHub Actions.

### Workflow says `Missing YOUTUBE_API_KEY`

The repository secret is missing or its name is not exactly `YOUTUBE_API_KEY`.

### YouTube API error

Confirm that YouTube Data API v3 is enabled in the same Google Cloud project as the API key and that the key is allowed to use that API.
