import React from "react";

export default React.createContext({
  posts: [],
  bookmarks: [],
  addPostToBookmark: post => {},
  removePostFromBookmark: postId => {},
  toggleSidebar: () => {},
  dataTableSortBy: title => {}
});
