import express from 'express';
import router from './routes/admin/main.js'
import socket from 'socket';
import { logger } from '../utils/logger.js';
import {buildPipelineA, buildPipelineB} from '../app/admin/externals/pipeline.js'
import {runAction} from '../app/admin/taskMaster.js'

const port = process.env.PORT

logger.info(`Starting on port ${port}`);

const app = express();

// PHASE 1: just a collection of event handlers
addSocketEvent('TRIGGER_PIPELINE_A', () => {
    buildPipelineA();
});

addSocketEvent('TRIGGER_PIPELINE_B', () => {
    buildPipelineB();
});


// PHASE 2: consolidate event logic into a 'Task Master' module
addSocketEvent('EVENT', (event, params, state) => {
    runAction(event.name, params, state, emitSocketEvent);
});


// PHASE 3: distinct step modules managing server-side state 
function stepTransistion(step, handlers) {
    // remove all socket events
    socket.removeAllListeners();

    let handlers = step.initialize(stepTransistion, emitSocketEvent);

    handlers.forEach(addSocketEvent(handler.name, handler.function));
}

function addSocketEvent(eventName, fn) {
    socket.on(eventName, args) => fn();
}

function emitSocketEvent(action, state) {
    socket.emit(action, state);
}

app.listen(port, function() {
    logger.info('Admin Web Server Listening', {port});
});
