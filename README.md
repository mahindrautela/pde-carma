# CARMA project website

Static project page for **Ground-Truth-Free Selection in Conditional Generative PDE Surrogates via Cyclic Consistency**.

CARMA uses path-wise forward–backward consistency to select among stochastic autoregressive PDE rollouts without future ground truth or test-time parameter updates.

## Local preview

From the repository root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Push the files to the `main` branch of the `pde-carma` repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select **main**, folder **/(root)**, and save.

The project site will be available at:

```text
https://mahindrautela.github.io/pde-carma/
```

All asset paths are relative, so the site also works in a local preview.
