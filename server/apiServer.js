import express from 'express';
import router from './routes/api/main.js'
import { logger } from '../utils/logger.js';

const port = process.env.PORT

logger.info(`Starting API server on port ${port}`);

const app = express();

app.get('/', function(req, res) {
    logger.info('GET /');
    res.send('API Heartbeat OK');
});

app.listen(port, function() {
    logger.info('API Server Listening', {port});
});
