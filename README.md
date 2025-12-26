# PrimeX - Official Homepage

**Private Markets, Re-engineered.**

PrimeX provides the compliant, full-stack infrastructure to tokenize, issue, and trade real-world assets on-chain. This is the official homepage repository.

## Tech Stack
- **Framework**: React 19 (migrated from TypeScript to JavaScript)
- **Styling**: Tailwind CSS v3
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Development
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
Build the application for production:
```bash
npm run build
```
The output will be in the `dist/` directory.

### Deployment to Vercel

This project is configured for easy deployment on Vercel.

#### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

#### Option 2: Deploy via Vercel Dashboard
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will automatically detect the Vite configuration
5. Click "Deploy" - no additional configuration needed!

The `vercel.json` file is already configured with:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing rewrites for client-side navigation
- Asset caching headers for optimal performance

## Project Structure
- `src/components/ui/`: Atomic UI components (Button, FadeIn, etc.)
- `src/components/layout/`: Global layout components (Navbar, Footer, LogoWall)
- `src/components/sections/`: Landing page sections
- `src/pages/`: Main views
- `src/data/`: Static content and translations

## License
© 2025 PrimeX Global. All rights reserved.
