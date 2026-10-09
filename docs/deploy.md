# Deploying

1. Repo **Settings → Pages → Source: GitHub Actions** (one-time, owner action).
2. Merge to `main`; `.github/workflows/deploy.yml` builds and publishes to https://sukonik.github.io/nsukonik/.
3. **Custom domain (nsukonik.com)** only after Nathan approves DNS: add a `public/CNAME` file containing `nsukonik.com`,
   set repo variables/env `SITE=https://nsukonik.com` and `BASE=/` in the workflow build step, and configure DNS.

# Assets
`assets/legacy-originals/` holds the four supplied originals (unpublished; `Thumbs.db` excluded). Only the legacy logo is
published (`public/legacy/nsukonik-logo-1.png`). Photos/screenshots need Nathan's approval before use.
