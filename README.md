# freresglobal.com

Award-worthy marketing site for **Freres Global Systems** — an enterprise IT solutions provider and global supplier of laptops, workstations, servers, desktops, storage and components.

Stack: React 19 + Tailwind + Framer Motion + Lenis (frontend) · FastAPI + MongoDB (backend, optional after migration).

---

## Repository layout

```
freresglobal/
├── frontend/    # React marketing site (deploy this to Cloudflare Pages)
├── backend/     # FastAPI + MongoDB (kept for future use — NOT needed on Cloudflare)
└── memory/      # Product docs
```

The FastAPI backend is preserved intact for future use. You do **not** need to deploy it to publish the site — the contact form is wired to work standalone via Web3Forms (see below).

---

## Deploying the website to Cloudflare Pages

### 1. Get a free Web3Forms access key (for the contact form)
1. Go to https://web3forms.com
2. Enter the email address where you want inquiries delivered.
3. Copy the **access key** they email you.

### 2. Create a Cloudflare Pages project
1. Sign in at https://dash.cloudflare.com
2. **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Authorise GitHub and select this repository.

### 3. Build settings (exact values)
| Setting | Value |
|---|---|
| Framework preset | Create React App |
| Build command | `cd frontend && yarn install --frozen-lockfile && yarn build` |
| Build output directory | `frontend/build` |
| Root directory | `/` (leave blank) |

### 4. Environment variables (Cloudflare Pages → Settings → Environment variables)
| Name | Value |
|---|---|
| `NODE_VERSION` | `20` |
| `REACT_APP_WEB3FORMS_KEY` | *the access key from step 1* |
| `REACT_APP_BACKEND_URL` | *(leave empty — only set this if you decide to host the FastAPI backend elsewhere)* |

### 5. Deploy
Click **Save and Deploy**. First build takes ~3–5 minutes. Cloudflare gives you a temporary URL like `freresglobal.pages.dev`.

### 6. Connect your custom domain
Because your DNS is already on Cloudflare:
1. Open the project → **Custom domains** → **Set up a custom domain**
2. Enter `freresglobal.com` (add `www.freresglobal.com` too if you want)
3. Cloudflare wires the DNS automatically and provisions a free SSL cert (~5 minutes).
4. Visit https://freresglobal.com — done.

---

## Before your first deploy — one small cleanup

The workspace contains two Emergent-only pieces. They do not run in production and can be safely removed from the code you push to GitHub if you want a squeaky-clean prod build:

1. In `frontend/package.json`, remove this line from `devDependencies`:
   ```json
   "@emergentbase/visual-edits": "https://assets.emergent.sh/npm/emergentbase-visual-edits-1.0.13.tgz",
   ```
2. In `backend/requirements.txt`, remove:
   ```
   emergentintegrations==0.2.0
   ```
   (Only relevant if you later host the backend somewhere else. Ignore otherwise.)

The `public/index.html` already has PostHog/Emergent scripts stripped out.

---

## What will and will not work after cancelling Emergent hosting

| Feature | Status on Cloudflare Pages |
|---|---|
| Homepage, hero, animations, marquee, manifesto, product bento, services, partners, footer | Works |
| Product photography (Unsplash CDN) | Works |
| Google Fonts (Outfit, IBM Plex Sans / Mono) | Works |
| Smooth scroll / motion / SPA routing | Works (`_redirects` file included) |
| **Contact / inquiry form** | Works via **Web3Forms** — emailed straight to you |
| `/api/inquiries`, `/api/catalog`, `/api/health` endpoints | **Not available** unless you separately host the FastAPI backend |

---

## Local development

```bash
# Frontend
cd frontend
cp .env.example .env
# paste your REACT_APP_WEB3FORMS_KEY into .env
yarn install
yarn start
```

Backend (optional, only for local API testing):
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001
```
