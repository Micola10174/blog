import * as types from '../actions/constants';

const INITIAL_STATE = {
    topic: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.GET_TOPIC_SUCCESS:
            return {...state, topic: action.payload.data}
        case types.DELETE_TOPIC_SUCCESS:
            return {...state, topic: state.topic.filter(el => el.idcategories !== Number(action.payload.data.id))} 
        default:
            return state
    }
}
