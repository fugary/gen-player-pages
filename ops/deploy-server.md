# Deploy Static Site To Server

This repository is a plain static site, so GitHub Actions can publish the site
files directly to a server directory and Nginx can serve them locally without
proxying to GitHub Pages.

## Why this is better here

- It removes the server-to-GitHub dependency during page requests.
- It keeps the current URLs unchanged because the site already uses relative paths.
- It reduces runtime failure modes to Nginx + local disk + your server network.

## Required GitHub secrets

Configure these in `Settings -> Secrets and variables -> Actions`:

- `DEPLOY_HOST`: Server hostname or IP.
- `DEPLOY_PORT`: SSH port, usually `22`.
- `DEPLOY_USER`: SSH username.
- `DEPLOY_PATH`: Absolute deploy directory, for example `/var/www/genplayer.fugary.com/current`.
- `DEPLOY_SSH_KEY`: Private key used by GitHub Actions for SSH login.
- `DEPLOY_KNOWN_HOSTS`: Output from `ssh-keyscan -p <port> <host>`.

Example:

```bash
ssh-keyscan -p 22 genplayer.fugary.com
```

## Server directory suggestion

Use a directory that matches the Nginx `root`:

```text
/var/www/genplayer.fugary.com/current
```

The workflow syncs the repository root to that directory and excludes:

- `.git/`
- `.github/`
- `ops/`
- `README.md`

## Nginx

Use `ops/nginx.genplayer.conf.example` as the template and update only the
`root` path if needed.
