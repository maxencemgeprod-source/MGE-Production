# MGE Production — Local setup

This repository contains a React+Parcel project for the MGE Production site. If you want to run the full dev environment, you need Node/npm installed.

Quick start (recommended)

1. Install Node (if not installed):

Homebrew:
```bash
brew install node
```

Or with nvm (recommended):
```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \ . "$NVM_DIR/nvm.sh"
nvm install --lts
nvm use --lts
```

2. Install dependencies and run dev server:

```bash
cd /Users/maxence/Downloads/mge_site_full
npm install
npm run dev
```

Parcel will serve the site on `http://localhost:3000`.

No-Node quick preview

If you don't want to install Node, open `static.html` in your browser (double-click), or serve it with a simple HTTP server:

```bash
# from repository root
python3 -m http.server 8000
# then open http://localhost:8000/static.html
```

Notes
- `static.html` is a simplified static preview using the Tailwind Play CDN and remote images — it is intended for quick visual checks only.
- For development, building, or deploying, use the full project with Node and the Parcel scripts.
