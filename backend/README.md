# Portfolio Backend

FastAPI backend for Jayanth's portfolio website.

## Features
- Resume assistant API powered by OpenRouter
- Portfolio context loaded from `data.json`
- Health endpoints for deployment checks
- Contact endpoint intentionally disabled (returns `503`)

## Local Run
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Available at:
- `http://localhost:8000/`
- `http://localhost:8000/healthz`
- `http://localhost:8000/docs`

## Environment Variables
Create `.env` in `backend/` from `.env.example`:

```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_MODEL=openai/gpt-4o-mini
CORS_ORIGINS=*
```

Notes:
- `CORS_ORIGINS` supports comma-separated values in production, e.g.
   `https://your-frontend.onrender.com,https://yourdomain.com`
- Keep `OPENROUTER_API_KEY` private and only set via host secrets.

## API Endpoints

### `GET /`
Returns service status.

### `GET /healthz`
Healthcheck endpoint for Render.

### `POST /api/resume-chat`
Request:
```json
{
   "question": "Summarize key projects",
   "history": []
}
```

Response:
```json
{
   "answer": "...",
   "sources": ["Portfolio Resume"]
}
```

### `POST /api/contact`
Currently disabled by design. Returns `503`.

## Render Deployment

This repo includes `render.yaml` at project root configured for backend deploy:
- `rootDir: backend`
- `buildCommand: pip install -r requirements.txt`
- `startCommand: uvicorn main:app --host 0.0.0.0 --port $PORT`
- `healthCheckPath: /healthz`

Deploy steps:
1. Push repo to GitHub.
2. In Render, create a Blueprint service from repo (or create Web Service manually using same commands).
3. Set `OPENROUTER_API_KEY` in Render environment.
4. (Recommended) Set `CORS_ORIGINS` to your frontend domain(s).

