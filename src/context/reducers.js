import {
  ADD_POST,
  REMOVE_POST,
  ADD_POST_TO_BOOKMARK,
  REMOVE_POST_FROM_BOOKMARK
} from "./types";

const addPostToBookmark = (state, post) => {
  console.log(state, post);
};
const removePostFromBookmark = (state, postId) => {
  console.log(state);
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_POST_TO_BOOKMARK:
      return addPostToBookmark(state, action.post);
    case REMOVE_POST_FROM_BOOKMARK:
      return removePostFromBookmark(state, action.postId);
    default:
      return state;
  }
};
