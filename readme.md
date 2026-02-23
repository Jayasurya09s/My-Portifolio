# Jayanth Galaxy Portfolio

Full-stack portfolio with a React + Vite frontend and a FastAPI backend that powers the resume assistant.

## Live URLs
- Frontend: https://middejayanth.vercel.app/
- Backend: https://my-portifolio-i7in.onrender.com/

## What Is Included
- Frontend portfolio with projects, hackathons, skills, and interactive UI
- Resume assistant endpoint `/api/resume-chat` using OpenRouter
- Single-source data in `frontend/src/data/*` with auto-sync to `backend/data.json`
- Render deployment for backend and Vercel deployment for frontend

## Local Development

### 1) Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Backend endpoints:
- http://localhost:8000/
- http://localhost:8000/healthz
- http://localhost:8000/docs

### 2) Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend runs at http://localhost:3000 (Vite server).

### Local API Routing
- `frontend/vite.config.ts` proxies `/api` to `http://localhost:8000`.
- If `VITE_API_BASE_URL` is empty, requests go to `/api/*` and use the proxy.
- If `VITE_API_BASE_URL` is set, requests go directly to that URL.

## Environment Variables

### Backend (.env)
Create `backend/.env` based on [backend/.env.example](backend/.env.example):
```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_MODEL=openai/gpt-4o-mini
CORS_ORIGINS=http://localhost:3000,http://localhost:5173,https://middejayanth.vercel.app
```

### Frontend (.env)
Create `frontend/.env` based on [frontend/.env.example](frontend/.env.example):
```env
# Local
VITE_API_BASE_URL=http://localhost:8000

# Production (Vercel)
# VITE_API_BASE_URL=https://my-portifolio-i7in.onrender.com
```

## Data Sync (Single Source of Truth)

The portfolio data lives in:
- `frontend/src/data/projects.ts`
- `frontend/src/data/hackathons.ts`
- `frontend/src/data/technologies.ts`

Backend AI context is generated into `backend/data.json`:
```bash
cd frontend
npm run sync:backend-data
```

Auto-sync happens on:
- `npm run dev` (predev)
- `npm run build` (prebuild)

Do not edit `backend/data.json` manually.

## API Endpoints

### POST /api/resume-chat
```json
{
	"question": "What projects has Jayanth built?",
	"history": []
}
```

### POST /api/contact
Currently disabled by design and returns `503`.

## Deployment

### Backend (Render)
The Render blueprint is already in [render.yaml](render.yaml):
- Build: `pip install -r requirements.txt`
- Start: `uvicorn main:app --host 0.0.0.0 --port $PORT`
- Health: `/healthz`

Set env vars in Render:
- `OPENROUTER_API_KEY` (required)
- `OPENROUTER_MODEL` (optional)
- `CORS_ORIGINS` (recommended)

### Frontend (Vercel)
Set the Vercel environment variable:
- `VITE_API_BASE_URL=https://my-portifolio-i7in.onrender.com`

Build command:
- `npm run build`

Output directory:
- `frontend/dist`

## Notes
- Contact form shows a backend send option, but the backend route is disabled. Direct email is still available.
- Update `CORS_ORIGINS` if you add more domains.

## Useful Commands
```bash
# Frontend
cd frontend
npm run dev
npm run build
npm run sync:backend-data

# Backend
cd backend
uvicorn main:app --reload --port 8000
```
