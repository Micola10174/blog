import * as types from '../actions/constants';

const INITIAL_STATE = {
    posts: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.GET_POST_SUCCESS:
            return {...state, posts: action.payload.data}
        default:
            return state
    }
}

