# GenPlayer Public Pages

This repository is the published website output for GenPlayer.

- Static site pages are synced from the main GenPlayer repository's `website/` directory.
- Repository-specific deployment files such as `.github/workflows/` and `ops/` are synced from the main repository's `website-public-repo-overlay/` directory.
- Changes made directly in this repository can be overwritten by the next website sync.

## Local preview

```bash
python3 -m http.server 8080
```

Then open:

- http://127.0.0.1:8080/index.html
- http://127.0.0.1:8080/privacy.html
- http://127.0.0.1:8080/feedback.html

## Ownership

If you need to change the website or the server deployment workflow, update the
main GenPlayer repository instead of editing this repository directly.
