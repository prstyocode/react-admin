import React, { useReducer } from "react";

import Context from "./root";
import { reducer } from "./reducers";
import {
  ADD_POST_TO_BOOKMARK,
  REMOVE_POST_FROM_BOOKMARK,
  TOGGLE_SIDEBAR
} from "./types";

const GlobalState = props => {
  const crudList = [
    {
      title: "Lists",
      icon: "fa-stream",
      link: "/"
    },
    {
      title: "Create",
      icon: "fa-pen",
      link: "/create"
    }
  ];

  const globState = {
    posts: [
      { id: "1", title: "Gaming Mouse", description: "The content" },
      { id: "2", title: "Harry Potter 3", description: "The content" },
      { id: "3", title: "Used plastic bottle", description: "The content" },
      { id: "4", title: "Half-dried plantae..", description: "The content" }
    ],
    bookmarks: [],
    sideBarMenu: [
      {
        title: "Dashboard",
        icon: "fa-tachometer-alt",
        child: []
      },
      {
        title: "Post",
        icon: "fa-book",
        child: crudList
      },
      {
        title: "Yorozeya",
        icon: "fa-eye",
        child: []
      }
    ],
    isToggledSidebar: true,
    appName: "Re:Admin"
  };

  const [state, dispatch] = useReducer(reducer, globState);

  const addPostToBookmark = post => {
    dispatch({ type: ADD_POST_TO_BOOKMARK, post });
  };

  const removePostFromBookmark = postId => {
    dispatch({ type: REMOVE_POST_FROM_BOOKMARK, postId });
  };

  const toggleSidebar = () => dispatch({ type: TOGGLE_SIDEBAR });

  return (
    <Context.Provider
      value={{
        posts: state.posts,
        bookmarks: state.bookmarks,
        sideBarMenu: state.sideBarMenu,
        isToggledSidebar: state.isToggledSidebar,
        appName: state.appName,
        addPostToBookmark: addPostToBookmark,
        removePostFromBookmark: removePostFromBookmark,
        toggleSidebar: toggleSidebar
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
