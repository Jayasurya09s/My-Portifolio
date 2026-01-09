# Jayanth - Portfolio Website

A modern, interactive portfolio website showcasing full-stack projects, AI/ML applications, robotics systems, and IoT innovations. Built with React, TypeScript, Tailwind CSS, and Three.js for an immersive visual experience.

## 🌟 Features

- **Interactive Hero Section** - Animated nebula background with custom cursor effects
- **Project Showcase** - Detailed case studies for 10+ projects across multiple categories
- **Tech Stack Display** - Visual representation of technical skills with mastery levels
- **Smooth Animations** - Framer Motion animations and Three.js 3D scenes
- **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices
- **Contact Integration** - Easy way to get in touch with form validation
- **Dark Theme** - Modern dark-themed UI with neon accent colors

##  Quick Start

### Prerequisites
- Node.js 16+ or Bun
- npm, yarn, or bun package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd jayanth-galaxy

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# or
bun run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
# Production build
npm run build
# or
bun run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing section
│   ├── Projects.tsx    # Projects showcase
│   ├── TechShowcase.tsx # Technology stack
│   ├── Hackathons.tsx  # Hackathon achievements
│   ├── Contact.tsx     # Contact form
│   ├── Navbar.tsx      # Navigation
│   ├── AnimatedStats.tsx # Statistics display
│   ├── CustomCursor.tsx # Custom cursor effect
│   ├── FloatingParticles.tsx # Particle animations
│   ├── NebulaBackground.tsx # Background effects
│   ├── Starfield.tsx   # Star animation
│   └── ui/             # Shadcn UI components
├── pages/              # Project detail pages
├── data/               # Static data
│   ├── projects.ts     # Project information
│   ├── technologies.ts # Tech stack
│   └── hackathons.ts   # Hackathon data
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Three.js** - 3D graphics
- **shadcn/ui** - Component library
- **Radix UI** - Headless UI components

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Tailwind CSS** - Style framework

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run build:dev` | Build in development mode |
| `npm run lint` | Run ESLint checks |
| `npm run preview` | Preview production build locally |

##  Customization

### Colors & Themes
Modify the Tailwind configuration in `tailwind.config.ts` to change color schemes and theme.

### Content
Update project data in `src/data/projects.ts` and technology data in `src/data/technologies.ts`.

### Animations
Adjust animation settings in individual component files using Framer Motion props.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

##  Deployment

The project is configured for easy deployment on Vercel:

```bash
# Deploy to Vercel
npm run build
```

Or use the `vercel.json` configuration file for automatic deployments.

##  Performance

- Optimized asset loading with Vite
- Tree-shaking for minimal bundle size
- Lazy loading of heavy components
- Optimized animations using GPU acceleration

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio template for your own purposes.

##  License

This project is open source and available under the MIT License.

##  About

This portfolio website showcases:
- **Full Stack Development** - MERN stack projects
- **AI/ML Applications** - Prompt optimization, artifact verification
- **Robotics & IoT** - Underwater robotics, autonomous systems
- **System Design** - CPU scheduling, OS concepts
- **Hackathons** - Smart India Hackathon, campus competitions

##  Get In Touch

Visit the Contact section on the website or reach out through the contact form to discuss collaborations and opportunities.

---

**Built  using React, TypeScript, and Tailwind CSS**
