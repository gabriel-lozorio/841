# Counting API

A simple API that provides a sequence of numbers from 1 to 10.

## Features

- Count from 1 to 10 API endpoint
- Express.js backend with TypeScript
- Structured project architecture
- Error handling middleware
- Logging system
- Health check endpoint

## Project Structure

```
src/
├── api/                  # API controllers
├── config/               # Application configuration
├── constants/            # Application constants
├── instances/            # Service instances
├── middleware/           # Express middleware
├── routes/               # API routes
├── services/             # Business logic
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
└── server.ts            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- SQL Server (optional, for database features)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Copy the environment file and configure it:
   ```
   cp .env.example .env
   ```
4. Start the development server:
   ```
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start the development server with hot-reload
- `npm run build` - Build the application for production
- `npm start` - Run the production build
- `npm test` - Run tests
- `npm run lint` - Run linting

## API Endpoints

### Public Endpoints

- `GET /api/external/counter` - Get a sequence of numbers from 1 to 10
- `GET /health` - Health check endpoint

## Environment Variables

See `.env.example` for all available configuration options.

## License

This project is licensed under the MIT License.
