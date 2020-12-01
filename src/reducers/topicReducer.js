import * as types from '../actions/constants';

const INITIAL_STATE = {
    topic: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.GET_TOPIC_SUCCESS:
            return {...state, topic: action.payload.data}
        default:
            return state
    }
}
