import * as types from './constants';

export function addPost(data) {
    return {
        type: types.POST_CREATE_POST,
        payload: {
            client: 'default',
            request: {
                url: `/post`,
                method: "post",
                data
            }
        }
    };
}

export function getPosts() {
    return {
        type: types.GET_POST,
        payload: {
            client: 'default',
            request: {
                url: `/post`,
                method: "get"
            }
        }
    };
}

