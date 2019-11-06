import {
  ADD_POST,
  REMOVE_POST,
  ADD_POST_TO_BOOKMARK,
  REMOVE_POST_FROM_BOOKMARK,
  TOGGLE_SIDEBAR
} from "./types";

const addPostToBookmark = (state, post) => {
  return { ...state, bookmarks: [...state.bookmarks, post] };
};
const removePostFromBookmark = (state, postId) => {
  console.log(state);
};
const toggleSidebar = state => {
  return { ...state, isToggledSidebar: !state.isToggledSidebar };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_POST_TO_BOOKMARK:
      return addPostToBookmark(state, action.post);
    case REMOVE_POST_FROM_BOOKMARK:
      return removePostFromBookmark(state, action.postId);
    case TOGGLE_SIDEBAR:
      return toggleSidebar(state);
    default:
      return state;
  }
};
