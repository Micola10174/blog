import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import ReducerPosts from './postsReducer';
import ReducerTopics from './topicReducer';


const rootReducer = history => combineReducers({
    router: connectRouter(history),
    posts: ReducerPosts,
    topics: ReducerTopics
})

export default rootReducer;