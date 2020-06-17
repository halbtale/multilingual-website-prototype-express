import express from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import helmet from 'helmet';
import compression from 'compression';
import welcomeRouter from './routes/welcome-router';
import { notFoundHandler } from './controllers/not-found-handler'
import { errorHandler } from './controllers/error-handler'

export default async () => {
    // Initializate express app
    const app = express();

    // Compression
    app.use(compression());

    // Helmet Headers
    app.use(helmet());

    // Serve Static Files
    app.use(express.static(process.cwd() + '/static'));

    // Body parser
    app.use(express.json());

    // Xss Sanitizer
    app.use(xss());

    // MongoDB Sanitizer
    app.use(mongoSanitize());

    // Api routers
    app.use(`${process.env.API_PATH}/welcome`, welcomeRouter);

    // Not found
    app.use(`${process.env.API_PATH}/`, notFoundHandler);

    // Error Handler
    app.use(errorHandler);

    return app;
}