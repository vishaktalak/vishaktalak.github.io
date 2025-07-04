# Vishakh Talak - Portfolio Website

A professional portfolio website built with modern web technologies, showcasing 7+ years of software development experience.

## Architecture

This project follows a monorepo structure with separate client and server configurations:

```
├── client/          # React frontend application
│   ├── src/         # Source code
│   ├── package.json # Client dependencies
│   ├── vite.config.ts
│   └── tsconfig.json
├── server/          # Express.js backend
│   ├── package.json # Server dependencies
│   └── tsconfig.json
├── shared/          # Shared types and schemas
└── dist/           # Production build output
```

## Technology Stack

### Frontend (Client)
- **React 18** with TypeScript
- **Vite** for development and building
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **TanStack Query** for server state
- **Wouter** for client-side routing

### Backend (Server)
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **PostgreSQL** database support
- **File serving** for resume downloads

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Getting Started

1. **Install dependencies for all packages:**
   ```bash
   npm run install:all
   ```

2. **Start development servers:**
   ```bash
   npm run dev
   ```
   This runs both client (port 3000) and server (port 5000) concurrently.

3. **Individual development:**
   ```bash
   # Client only
   npm run dev:client
   
   # Server only  
   npm run dev:server
   ```

## Building for Production

1. **Build both client and server:**
   ```bash
   npm run build
   ```

2. **Individual builds:**
   ```bash
   npm run build:client  # Builds to dist/public
   npm run build:server  # Builds to dist/index.js
   ```

3. **Start production server:**
   ```bash
   npm start
   ```

## Project Structure

### Client Configuration
- **Vite config**: Development server on port 3000 with API proxy
- **Build output**: `dist/public/` directory
- **TypeScript**: Strict mode with path aliases

### Server Configuration  
- **Development**: tsx watch mode for hot reloading
- **Build**: ESBuild bundling for Node.js
- **Production**: Serves static files from `dist/public`

## Features

- **Responsive Design**: Mobile-first approach
- **Resume Download**: PDF download functionality
- **Smooth Navigation**: Anchor-based section navigation
- **Modern UI**: Professional design with animations
- **Type Safety**: Full TypeScript coverage
- **SEO Optimized**: Meta tags and semantic HTML

## Deployment

The project is configured for deployment on Replit:

1. **Automatic**: Use Replit's Deploy button
2. **Manual**: Run `npm run build` then `npm start`

The server handles both API endpoints and static file serving in production.

## Environment Variables

- `NODE_ENV`: Development/production mode
- `DATABASE_URL`: PostgreSQL connection string (optional)

## API Endpoints

- `GET /api/resume`: Download resume PDF
- `GET /*`: Serve React application

## License

MIT License - See LICENSE file for details.