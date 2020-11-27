import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import ReducerPosts from './postsReducer';


const rootReducer = history => combineReducers({
    router: connectRouter(history),
    posts: ReducerPosts
})

export default rootReducer;