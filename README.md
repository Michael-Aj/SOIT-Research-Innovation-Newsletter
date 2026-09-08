# SOIT Research + Innovation Newsletter

Static GitHub Pages distribution package for the **School of Information Technology | STADIO Higher Education**.

## What is included

- A branded public landing page in `docs/index.html`
- A permanent `/latest/` link that redirects to the newest issue
- An archive page for past and future issues
- Issue 01 (September 2026) as a browser-readable and downloadable PDF
- Share buttons for LinkedIn, email and WhatsApp
- RSS feed starter file (`docs/feed.xml`)
- GitHub Release notes for Issue 01
- A simple structure for publishing future issues

## 1. Create the GitHub repository

Recommended repository name:

`SOIT-Research-Innovation-Newsletter`

For an official School publication, use an institutional/STADIO GitHub organisation if one is available and approved. Otherwise, a public repository under the editor's account will work technically.

## 2. Upload this package

The important point is that `README.md` and the `docs/` folder must be at the **repository root**.

### GitHub website method

1. Create the repository on GitHub.
2. Choose **Add file → Upload files**.
3. Upload the contents of this folder.
4. Commit to the `main` branch.

### Git command method

```bash
git init
git add .
git commit -m "Publish SOIT Research + Innovation Issue 01"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/SOIT-Research-Innovation-Newsletter.git
git push -u origin main
```

## 3. Turn on GitHub Pages — static deployment (recommended)

This package is a plain HTML/CSS/JavaScript site. It does **not** need Jekyll. A no-Jekyll Pages workflow is included at:

`.github/workflows/pages.yml`

In GitHub:

1. Open **Settings**.
2. Select **Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Commit/push the package to the `main` branch.
5. Open **Actions** and allow the workflow **Deploy SOIT Newsletter to GitHub Pages** to complete.

The workflow uploads the `docs/` folder directly and does not run Jekyll.

Your public URL will normally be:

`https://YOUR-GITHUB-USERNAME.github.io/SOIT-Research-Innovation-Newsletter/`

### Why this avoids the Jekyll error

The original Pages setup may try to run `jekyll-build-pages` and render `assets/css/style.scss`. This newsletter already contains compiled `style.css`, so Jekyll is unnecessary. The included workflow deploys the static files directly. The empty `docs/.nojekyll` file is also included as an additional safeguard if branch-based Pages is ever used.

### If an old Jekyll workflow already exists

Delete or disable any workflow that contains `actions/jekyll-build-pages`, for example `.github/workflows/jekyll-gh-pages.yml`. Keep only `.github/workflows/pages.yml` for this site.

## 4. Make one small URL update

After the live URL is known, open `docs/feed.xml` and replace every occurrence of:

`YOUR-GITHUB-USERNAME`

with the real GitHub username or organisation name.

If the repository name changes, update that part of the feed URL as well.

## 5. Create the Issue 01 GitHub Release

In the repository:

1. Open **Releases**.
2. Choose **Draft a new release**.
3. Tag: `2026.09`
4. Release title: `SOIT Research + Innovation | Issue 01 | September 2026`
5. Copy the text from `RELEASE_NOTES_2026-09.md`.
6. Attach `docs/issues/2026/issue-01/SOIT-Research-Innovation-Newsletter-Sep-2026.pdf`.
7. Publish the release.

The website becomes the permanent public address; the Release gives the PDF a clean versioned publication record.

## 6. Publish the next issue

For Issue 02:

1. Create a new folder, for example:
   `docs/issues/2027/issue-02/`
2. Put the PDF and a copy of an issue `index.html` there.
3. Update `docs/latest/index.html` so it redirects to Issue 02.
4. Add Issue 02 to `docs/archive.html`.
5. Update the latest-issue section on `docs/index.html`.
6. Add a new item to `docs/feed.xml`.
7. Create a new GitHub Release.

Do **not** delete Issue 01. The archive is part of the value of the publication.

## Recommended distribution model

Use the GitHub Pages home page as the single link in:

- LinkedIn posts
- staff email signatures and newsletters
- Teams / Canvas announcements
- Research Day invitations
- QR codes on posters and event material
- partnership and industry communication

Use the `/latest/` URL when you specifically want a link that always points to the newest issue.

## Optional custom domain

If STADIO approves an institutional subdomain, copy `docs/CNAME.example` to `docs/CNAME` and replace the example domain with the approved domain. DNS configuration will also be required by the domain administrator.

## Branding and copyright

The package intentionally contains no open-source licence for newsletter content. Institutional logos, branding, editorial material and newsletter content should remain subject to STADIO's applicable brand, copyright and communications policies.
