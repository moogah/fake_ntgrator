
function runAction(actionName, params, state, callback) {
    // check a global constant map to prevent harmful actions being run 
    const validAction = ActionMap.includes(actionName);

    if (validAction) {
        this.currentAction = actionName;
    } else {
        callback('invalidAction', state);
    }

    let newState;

    // pass the current state along with the incoming params
    // to an action runner
    newState = await validAction.run({
        actionName: actionName,
        state: this.state,
        params
    });

    // check if newState is valid

    // Update state and emit to client
    callback('stateUpdated', newState);
}

export {runAction}
