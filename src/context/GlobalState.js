import React, { useReducer } from "react";

import Context from "./root";
import { reducer } from "./reducers";
import {
  ADD_POST_TO_BOOKMARK,
  REMOVE_POST_FROM_BOOKMARK,
  TOGGLE_SIDEBAR,
  DATA_TABLE_SORT_BY
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
    appName: "Re:Admin",
    dataTable: {
      titles: ["id", "name", "address", "created at"],
      contents: [
        {
          id: 1,
          name: "Asuka Langley",
          address: "Germania",
          createdAt:
            new Date().getDate() +
            "-" +
            new Date().getMonth() +
            "-" +
            new Date().getFullYear()
        },
        {
          id: 2,
          name: "Boris",
          address: "New South",
          createdAt:
            new Date().getDate() -
            1 +
            "-" +
            new Date().getMonth() +
            "-" +
            new Date().getFullYear()
        },
        {
          id: 3,
          name: "Eri",
          address: "Fukuoka Prefecture",
          createdAt:
            new Date().getDate() -
            5 +
            "-" +
            new Date().getMonth() +
            "-" +
            new Date().getFullYear()
        }
      ],
      sortType: "asc"
    }
  };

  const [state, dispatch] = useReducer(reducer, globState);

  const addPostToBookmark = post => {
    dispatch({ type: ADD_POST_TO_BOOKMARK, post });
  };

  const removePostFromBookmark = postId => {
    dispatch({ type: REMOVE_POST_FROM_BOOKMARK, postId });
  };

  const toggleSidebar = () => dispatch({ type: TOGGLE_SIDEBAR });

  const dataTableSortBy = title => {
    // console.log(title);
    dispatch({ type: DATA_TABLE_SORT_BY, title });
  };

  return (
    <Context.Provider
      value={{
        posts: state.posts,
        bookmarks: state.bookmarks,
        sideBarMenu: state.sideBarMenu,
        isToggledSidebar: state.isToggledSidebar,
        appName: state.appName,
        dataTable: state.dataTable,
        addPostToBookmark: addPostToBookmark,
        removePostFromBookmark: removePostFromBookmark,
        toggleSidebar: toggleSidebar,
        dataTableSortBy: dataTableSortBy
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
