import * as types from './constants';

export function getTopics() {
    return {
        type: types.GET_TOPIC,
        payload: {
            client: 'default',
            request: {
                url: `/topic`,
                method: "get",
            }
        }
    };
}

export function postTopics(data) {
    console.log(data);
    return {
        type: types.POST_CREATE_TOPIC,
        payload: {
            client: 'default',
            request: {
                url: `/topic`,
                method: "post",
                data
            }
        }
    };
}

export function deleteTopic(id) {
    return {
        type: types.DELETE_TOPIC,
        payload: {
            client: 'default',
            request: {
                url: `/topic/${id}`,
                method: "delete",
            }
        }
    };
}

export function updateTopic({id, data}) {
    console.log(data);
    return {
        type: types.PUT_TOPIC,
        payload: {
            client: 'default',
            request: {
                url: `/topic/${id}`,
                method: "put",
                data
            }
        }
    };
}