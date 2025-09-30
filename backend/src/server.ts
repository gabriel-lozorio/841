import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { config } from './config';
import { errorMiddleware } from './middleware/errorMiddleware';
import { notFoundMiddleware } from './middleware/notFoundMiddleware';
import routes from './routes';
import { logger } from './utils/logger';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors(config.api.cors));

// Request processing middleware
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api', routes);

// 404 handler
app.use(notFoundMiddleware);

// Error handling
app.use(errorMiddleware);

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, closing server gracefully');
  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });
});

// Server startup
const server = app.listen(config.api.port, () => {
  logger.info(`Server running on port ${config.api.port} in ${process.env.NODE_ENV} mode`);
});

export default server;
