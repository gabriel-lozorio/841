# Frontend - sistema para contar de 1 a 10

This project was generated based on modern frontend architecture best practices. It uses Vite, React, TypeScript, and Tailwind CSS.

## Project Structure

The structure is designed to be modular and scalable, following domain-driven design principles.

- `src/app`: Core application setup (routing, providers, entry point).
- `src/core`: Shared, reusable, and cross-domain code (UI components, hooks, contexts, utils).
- `src/domain`: Business logic, components, and hooks specific to a business domain (e.g., `counter`).
- `src/pages`: Route components that orchestrate layouts and domain features.
- `src/assets`: Global styles and static assets.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm, npm, or yarn

### Installation

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Start the development server:
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the codebase.
- `npm run preview`: Serves the production build locally.
