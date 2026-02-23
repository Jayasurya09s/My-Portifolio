# Frontend Documentation — Jayanth Galaxy Portfolio

This folder contains the complete React + Vite frontend for the portfolio website.

## 1) Stack and Runtime

- React 18 + TypeScript
- Vite 5
- Tailwind CSS + shadcn/ui + Radix primitives
- Framer Motion animations
- React Router v6

## 2) Quick Start

```bash
cd frontend
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## 3) Frontend File Map

### Core files

- `src/main.tsx`: app bootstrap
- `src/App.tsx`: all route definitions
- `src/index.css`: global design tokens and utility styling
- `src/lib/utils.ts`: shared utility helpers
- `src/lib/api.ts`: backend API client for contact + resume chat

### Data-driven content (dynamic)

- `src/data/projects.ts`: single source of truth for project cards
- `src/data/hackathons.ts`: hackathon entries
- `src/data/technologies.ts`: tech stack data

If you add projects in `projects.ts`, they automatically appear in:

- Homepage recent projects section (`Projects.tsx`)
- Full archive page (`ProjectsPage.tsx`)
- Animated counters (`AnimatedStats.tsx`)

### Components

- `Navbar.tsx`: top navigation
- `Hero.tsx`: landing section
- `AnimatedStats.tsx` + `CounterStat.tsx`: numeric counters
- `Projects.tsx`: recent projects (first 6 from data)
- `TechShowcase.tsx`: skill/technology display
- `Hackathons.tsx`: hackathon highlight section
- `ResumeChat.tsx`: AI chat UI connected to backend `/api/resume-chat`
- `Contact.tsx`: contact form connected to backend `/api/contact` (with mailto fallback)
- Visual/background effects:
	- `Starfield.tsx`
	- `NebulaBackground.tsx`
	- `FloatingParticles.tsx`
	- `CustomCursor.tsx`

### Hooks

- `useSmoothScroll.ts`: smooth scroll behavior
- `use-mobile.tsx`: mobile viewport helper
- `use-toast.ts`: toast state integration

## 4) Route Documentation (All Pages)

Defined in `src/App.tsx`.

### Main routes

- `/` → `Index.tsx` (home page)
- `/skills` → `Skills.tsx`
- `/projects` → `ProjectsPage.tsx` (search + category filters)
- `/hackathons` → `HackathonsPage.tsx`

### Project detail routes

- `/projects/glider` → `Glider.tsx`
- `/projects/ecoai` → `EcoAI.tsx`
- `/projects/unitech` → `UniTech.tsx`
- `/projects/studyai` → `StudyAI.tsx`
- `/projects/roomigo` → `Roomigo.tsx`
- `/projects/raahi` → `Raahi.tsx`
- `/projects/cropmentor` → `CropMentor.tsx`
- `/projects/cpu-scheduler` → `CpuScheduler.tsx`
- `/projects/nerobot` → `NeroBot.tsx`
- `/projects/pcfr` → `PCFR.tsx`
- `/projects/gmail-to-sheets` → `GmailToSheets.jsx`
- `/projects/phoenix-system` → `PhoenixSystem.tsx`

### Fallback

- `*` → `NotFound.tsx`

## 5) Environment Variables

Use `.env` (template available in `.env.example`):

```env
VITE_API_BASE_URL=http://localhost:8080
```

Behavior:

- If `VITE_API_BASE_URL` is set, API calls go to that origin.
- If not set, frontend calls relative paths (`/api/...`) so same-domain deployments work.

## 6) Backend Integration Contract (for your backend implementation)

Frontend now expects these endpoints:

### A) Contact API (Brevo-ready)

- `POST /api/contact`
- Request body:

```json
{
	"name": "string",
	"email": "string",
	"message": "string"
}
```

- Success response:

```json
{
	"ok": true,
	"message": "Message sent successfully"
}
```

- Error response:

```json
{
	"ok": false,
	"message": "Readable error message"
}
```

Brevo backend suggestion:

- Use Brevo transactional email API with sender verification.
- Validate input server-side.
- Add basic rate limiting.

### B) Resume AI Chat API

- `POST /api/resume-chat`
- Request body:

```json
{
	"question": "string",
	"history": [
		{ "role": "user", "content": "..." },
		{ "role": "assistant", "content": "..." }
	]
}
```

- Success response:

```json
{
	"answer": "string",
	"sources": ["optional source names"]
}
```

Implementation suggestion for accurate resume answers:

- Ingest and chunk resume content (e.g., `public/lastresume.pdf`).
- Create embeddings and store in vector DB.
- On each question, retrieve top-k chunks and generate answer with grounded context.
- Return concise answer + optional sources.

## 7) Vercel Deployment (Fixed for your monorepo structure)

Your error happened because Vercel tried to run `npm install` at repo root, but `package.json` is inside `frontend`.

Fix applied:

- Root `vercel.json` added to run install/build from `frontend`.
- Frontend `vercel.json` rewrite corrected for SPA routing.

### Recommended Vercel Project Settings

- Root Directory: repository root (default)
- Build uses root `vercel.json`:
	- `installCommand`: `cd frontend && npm install`
	- `buildCommand`: `cd frontend && npm run build`
	- `outputDirectory`: `frontend/dist`

For backend + frontend together later:

- Option 1: Keep frontend on Vercel and backend on Render/Railway/Fly; set `VITE_API_BASE_URL`.
- Option 2: Add Vercel Functions in repo for `/api/contact` and `/api/resume-chat`.

## 8) How to Add New Projects Correctly

Add a new object to `src/data/projects.ts` with these keys:

- `title`
- `description`
- `tags` (string array)
- `category` (string or string array)
- `github`
- `demo`
- `caseStudy`
- `gradient`

The UI automatically updates in project sections and counters.

## 9) Scripts

- `npm run dev`: local dev server
- `npm run build`: production build
- `npm run build:dev`: development-mode build
- `npm run lint`: lint checks
- `npm run preview`: preview built app
