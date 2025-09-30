import sql from 'mssql';
import { config } from '../config';
import { logger } from '../utils/logger';

/**
 * @summary
 * Database connection pool manager
 */
class Database {
  private pool: sql.ConnectionPool | null = null;
  private static instance: Database;

  private constructor() {}

  /**
   * @summary
   * Gets the singleton instance of the Database class
   * 
   * @returns {Database} Database instance
   */
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  /**
   * @summary
   * Initializes the database connection pool
   */
  public async initialize(): Promise<void> {
    try {
      this.pool = await new sql.ConnectionPool({
        user: config.database.user,
        password: config.database.password,
        server: config.database.host,
        database: config.database.database,
        port: config.database.port,
        options: config.database.options,
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000
        }
      }).connect();

      logger.info('Database connection pool established');
    } catch (error) {
      logger.error('Failed to establish database connection', { error });
      throw error;
    }
  }

  /**
   * @summary
   * Gets the connection pool
   * 
   * @returns {sql.ConnectionPool} SQL Server connection pool
   */
  public getPool(): sql.ConnectionPool {
    if (!this.pool) {
      throw new Error('Database connection pool not initialized');
    }
    return this.pool;
  }

  /**
   * @summary
   * Executes a database request
   * 
   * @param {string} procedure - Stored procedure name
   * @param {any} params - Parameters for the stored procedure
   * @returns {Promise<any>} Query result
   */
  public async request(procedure: string, params: any = {}): Promise<any> {
    try {
      if (!this.pool) {
        await this.initialize();
      }

      const request = this.pool!.request();

      // Add parameters to the request
      Object.entries(params).forEach(([key, value]) => {
        request.input(key, value);
      });

      const result = await request.execute(procedure);
      return result;
    } catch (error) {
      logger.error('Database request failed', { procedure, error });
      throw error;
    }
  }

  /**
   * @summary
   * Closes the database connection pool
   */
  public async close(): Promise<void> {
    if (this.pool) {
      await this.pool.close();
      this.pool = null;
      logger.info('Database connection pool closed');
    }
  }
}

export const database = Database.getInstance();
