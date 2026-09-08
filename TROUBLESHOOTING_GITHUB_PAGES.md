# GitHub Pages Troubleshooting — Jekyll `style.scss` Error

## Symptom

A failed Pages run contains messages such as:

- `Rendering: assets/css/style.scss`
- `github-pages ... Error: No such file or directory @ dir_chdir0 - /github/workspace/docs`

## Cause

This newsletter is already a complete static site (`HTML + CSS + JavaScript`). A Jekyll Pages workflow is therefore unnecessary. If GitHub runs a Jekyll build template, it may attempt to process Sass/theme files that are not part of this site.

## Fix

1. Keep `.github/workflows/pages.yml` from this package.
2. In **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**.
3. Delete or disable any other workflow that contains `actions/jekyll-build-pages`.
4. Confirm `docs/.nojekyll` exists.
5. Push a new commit, then run **Deploy SOIT Newsletter to GitHub Pages** from the Actions tab.

The supplied workflow uploads `./docs` directly and performs no Jekyll build.
