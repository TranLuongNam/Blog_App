import { combineReducers } from "redux";
import postsReducer from "./posts.js";

const rootReducer = combineReducers({
    posts: postsReducer,
})
export default rootReducer;