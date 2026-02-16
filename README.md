# Event Finder

## Overview

This project showcases how to build a scalable React application with proper separation of concerns, featuring:

- Event search with real-time filtering and highlighting
- Clean architecture with distinct layers
- Schema-driven form generation
- Modern tooling and best practices

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **TanStack Query** for server state management
- **React Hook Form** + **Zod** for form handling and validation
- **Tailwind CSS** for styling

## Setup

```bash
npm install
npm run dev
```

## Architecture

### Layer Separation

**UI Primitives** (`components/ui/`)
- Reusable, presentation-only components
- No business logic

**Feature Components** (`components/`)
- Business-specific components
- Compose UI primitives

**Service Layer** (`services/`)
- Data fetching and business logic
- API calls, filtering, sorting
- EventService

**Custom Hooks** (`hooks/`)
- State management and side effects
- useEvents with TanStack Query integration

**Libraries** (`lib/`)
- Third-party integrations and adapters
- queryClient (TanStack Query), localStorage

**Utilities** (`utils/`)
- Pure helper functions
- Date formatting, text highlighting

**Schemas** (`schemas/`)
- Zod validation schemas
- Schema-driven form configuration

Potential future features:
- API integration (replace mock data in EventService)
- Additional filters (date range, categories)
- Event creation with real backend
- Pagination
- Unit and integration tests with Vitest
- Delete events
