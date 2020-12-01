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