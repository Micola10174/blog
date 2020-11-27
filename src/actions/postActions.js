import * as types from './constants';

export function addPost(data) {
    console.log(data)
    return {
        type: types.POST_CREATE_POST,
        payload: {
            client: 'default',
            request: {
                url: `/actors`,
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

