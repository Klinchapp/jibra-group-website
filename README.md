# Jibra Group of Companies — Corporate Website

Official website for **Jibra Group of Companies**, a diversified conglomerate specialising in premium tobacco manufacturing, global commodity trading, and professional consultancy services.

## Tech Stack

- **Framework**: React + TanStack Start (SSR)
- **Styling**: Tailwind CSS + Framer Motion
- **UI Components**: shadcn/ui
- **Auth**: Appwrite
- **Build**: Vite + Bun

## Getting Started

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env
# Fill in your Appwrite credentials

# Run development server
bun run dev
```

## Deployment (Vercel)

1. Push to GitHub
2. Import repository in Vercel
3. Set environment variables from `.env.example`
4. Deploy — Vercel auto-detects Vite

## Project Structure

```
├── public/
│   ├── brands/          # XMAN & Robin product images
│   ├── jibra-logo.png   # Company logo
│   ├── hero-bg.jpg      # Hero background
│   ├── og-image.jpg     # Social sharing image
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── landing/     # Homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── BrandPortfolio.tsx
│   │   │   ├── GlobalPresence.tsx
│   │   │   ├── News.tsx
│   │   │   ├── Nav.tsx
│   │   │   └── Footer.tsx
│   │   ├── auth/        # Authentication forms
│   │   └── ui/          # shadcn components
│   ├── routes/          # TanStack file-based routing
│   └── server/          # Server-side functions
└── package.json
```
