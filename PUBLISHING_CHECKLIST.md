# SOIT Newsletter Publishing Checklist

## First deployment
- [ ] Repository created: `SOIT-Research-Innovation-Newsletter`
- [ ] Package contents committed to the repository root
- [ ] `.github/workflows/pages.yml` is present
- [ ] `docs/.nojekyll` is present
- [ ] GitHub **Settings → Pages → Source** set to **GitHub Actions**
- [ ] Any old Jekyll workflow using `actions/jekyll-build-pages` removed/disabled
- [ ] `Deploy SOIT Newsletter to GitHub Pages` workflow succeeds
- [ ] Home page opens successfully
- [ ] Issue 01 page opens successfully
- [ ] PDF opens/downloads successfully
- [ ] `/latest/` redirects to Issue 01
- [ ] Archive page opens
- [ ] Mobile layout checked
- [ ] `docs/feed.xml` username/repository URL updated

## Release
- [ ] Tag created: `2026.09`
- [ ] Release title added
- [ ] Release notes copied from `RELEASE_NOTES_2026-09.md`
- [ ] Newsletter PDF attached to GitHub Release

## Distribution
- [ ] Permanent homepage link shared
- [ ] `/latest/` link used where a direct latest-issue link is preferred
- [ ] QR code points to the permanent homepage, not directly to the PDF
