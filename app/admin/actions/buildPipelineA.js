import Action from './Action.js'
import {buildPipelineA} from './externals/pipeline.js'

export default class BuildPipelineA extends Action {

    async run({state, params}, done) {
        if state not in [validStates] {
            done();
            return state;
        }

        // trigger pipeline

        let pipelineStatus = buildPipelineA();

        // check status

        // build new state object and return it

        let newState = {
            pipelineStatus: 'fooStatus',
            prevStateParam: state.foo
        }

        done();
        return newState;
    };
}
