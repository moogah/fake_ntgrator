import Step from './Step.js'

import {initialize} from './mergeChanges.js'

function initialize(stepTransistion, emitSocketEvent) {
    // Gather handlers

    stepTransistion(this, {addPullRequest, removePullRequest, mergePullRequests});
};


// Socket Event Handlers    
function addPullRequest(params, state) {
    // handle UI event to select a pull request for this batch
};

function removePullRequest(params, state) {
    // handle UI event to remove a pull request from this batch
};

function mergePullRequests(params, state) {
    
};

