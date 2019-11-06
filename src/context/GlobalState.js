import React, { useReducer } from "react";

import Context from "./root";
import { reducer } from "./reducers";
import { ADD_POST_TO_BOOKMARK, REMOVE_POST_FROM_BOOKMARK } from "./types";

const GlobalState = props => {
  const posts = [
    { id: "1", title: "Gaming Mouse", description: "The content" },
    { id: "2", title: "Harry Potter 3", description: "The content" },
    { id: "3", title: "Used plastic bottle", description: "The content" },
    { id: "4", title: "Half-dried plant", description: "The content" }
  ];
    
  const [state, dispatch] = useReducer(reducer, { posts, bookmarks: [] });

  const addPostToBookmark = post => {
    dispatch({ type: ADD_POST_TO_BOOKMARK, post });
  };

  const removePostFromBookmark = postId => {
    dispatch({ type: REMOVE_POST_FROM_BOOKMARK, postId });
  };

  return (
    <Context.Provider
      value={{
        posts: state.posts,
        bookmarks: state.bookmarks,
        addPostToBookmark: addPostToBookmark,
        removePostFromBookmark: removePostFromBookmark
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;