import express from 'express';
import router from './routes/user/main.js'
import { logger } from '../utils/logger.js';

const port = process.env.PORT

logger.info(`Starting User server on port ${port}`);

const app = express();

app.get('/', function(req, res) {
    logger.info('GET /');
    res.send('User Heartbeat OK');
});

app.listen(port, function() {
    logger.info('User Server Listening', {port});
});
