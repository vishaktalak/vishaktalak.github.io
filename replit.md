# Replit Portfolio Application

## Overview

This is a professional portfolio website for Vishakh Talak, a Full Stack Developer with 7+ years of experience. The application is built as a single-page application (SPA) using a modern React frontend with an Express.js backend, designed to showcase professional experience, skills, and projects.

## System Architecture

### Full-Stack Architecture
The application follows a monorepo structure with clear separation between frontend and backend concerns:
- **Frontend**: React-based SPA with TypeScript
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build System**: Vite for frontend bundling

### Directory Structure
```
├── client/          # React frontend application
├── server/          # Express.js backend
├── shared/          # Shared TypeScript types and schemas
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query** for server state management
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for styling with custom design system
- **Responsive design** with mobile-first approach

### Backend Architecture
- **Express.js** server with TypeScript
- **Development mode**: Vite middleware integration for hot reloading
- **Production mode**: Serves static files from dist directory
- **API routes** for resume download functionality
- **Request logging** middleware for development debugging

### Database Layer
- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** as the primary database (configured via DATABASE_URL)
- **Schema definitions** in shared directory for type consistency
- **Migration system** using Drizzle Kit

### UI Components
- **Comprehensive component library** using shadcn/ui
- **Accessible components** built on Radix UI primitives
- **Consistent design system** with CSS custom properties
- **Dark mode support** built into the design system

## Data Flow

### Portfolio Content
- Static content rendered client-side from component data
- Professional information, skills, and experience hardcoded in components
- Resume download functionality via API endpoint

### Client-Server Communication
- RESTful API endpoints for data exchange
- Resume download endpoint (`/api/resume`) returns formatted text
- Future database integration ready via Drizzle ORM setup

### State Management
- Local component state for UI interactions
- TanStack Query for server state caching
- Toast notifications for user feedback

## External Dependencies

### Core Dependencies
- **React ecosystem**: React, React DOM, TypeScript
- **UI framework**: Radix UI primitives, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL, Drizzle ORM, Neon Database serverless
- **Build tools**: Vite, ESBuild
- **Development**: TSX for TypeScript execution

### Design System
- **Inter font** from Google Fonts
- **Lucide React** for consistent iconography
- **Class Variance Authority** for component variants
- **CLSX** for conditional styling

## Deployment Strategy

### Development
- Uses Vite dev server with HMR (Hot Module Replacement)
- Express server runs with tsx for TypeScript execution
- Database migrations via `drizzle-kit push`

### Production Build
1. Frontend build via Vite to `dist/public`
2. Backend build via ESBuild to `dist/index.js`
3. Static file serving from Express server
4. Environment variables for database connection

### Environment Configuration
- `NODE_ENV` for environment detection
- `DATABASE_URL` for PostgreSQL connection
- `REPL_ID` for Replit-specific features

## Changelog
- June 30, 2025. Initial setup

## User Preferences
Preferred communication style: Simple, everyday language.