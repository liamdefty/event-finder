# Event Finder

## Overview

This project showcases how to build a scalable React application with proper separation of concerns, featuring:

- Event search with real-time filtering and highlighting
- Clean architecture with distinct layers
- Schema-driven form generation
- Modern tooling and best practices

## Requirements

To run this project locally, you need:

- **Node.js** 18+ (for React 19 support)
- **npm**
- Modern browser with ES6+ support

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

## Production/Future Considerations

Key improvements for production deployment:

### Backend & API
- Replace mock EventService with real API endpoints
- Implement authentication and authorization
- Add proper error handling with retry logic
- Replace localStorage with database persistence

### Testing & Quality
- Unit tests (Vitest), component tests (React Testing Library), E2E tests (Playwright)
- CI/CD pipeline with automated testing
- ESLint and Prettier configuration

### Performance
- Code splitting, lazy loading, and bundle optimization
- Virtual scrolling for large lists
- CDN for static assets and image optimization

### Theming & Styling
- Design system with brand guidelines as theme tokens
- CSS custom properties for dynamic theming
- Whitelabel/multi-tenant theme switching support
- Dark mode implementation

### Accessibility & UX
- ARIA labels, keyboard navigation, WCAG AA compliance
- Error boundaries, toast notifications, loading states

### Security & Monitoring
- Input sanitization, CSP headers, HTTPS enforcement
- Error tracking (Sentry) and analytics
- Regular security audits

### Developer Experience
- Pre-commit hooks (Husky)
- Storybook for component documentation
- Automated dependency updates
