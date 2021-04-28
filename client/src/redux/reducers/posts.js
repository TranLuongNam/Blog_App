import { INIT_STATE } from "../../constants";
import { getPosts, getType } from "../actions";

const postsReducer = (state = INIT_STATE.posts, action) => {
    switch (action.type) {
        case getType(getPosts.getPostsRequest()): // === case getPosts.getPostsRequest()
            return {
                ...{ state },
                isLoading: true
            }
        case getType(getPosts.getPostsSuccess()): // === case getPosts.getPostsSuccess()
            return {
                ...{ state },
                isLoading: false,
                data: action.payload
            }
        case getType(getPosts.getPostsFailer()): // === case getPosts.getPostsFailer()
            return {
                ...{ state },
                isLoading: false
            }
        default:
            return state;
    }
}
export default postsReducer
