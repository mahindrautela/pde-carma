# Publish the CARMA website

Target repository: `https://github.com/mahindrautela/pde-carma`

## Push the site

If this local copy still points to the previous repository, update the remote before pushing:

```bash
git remote set-url origin https://github.com/mahindrautela/pde-carma.git
git add .
git commit -m "Convert project site to CARMA"
git push -u origin main
```

## Enable GitHub Pages

1. Open the repository on GitHub.
2. Select **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select **main** and **/(root)**, then save.

The published site will be available at:

```text
https://mahindrautela.github.io/pde-carma/
```
