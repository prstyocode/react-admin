import {
  ADD_POST,
  REMOVE_POST,
  ADD_POST_TO_BOOKMARK,
  REMOVE_POST_FROM_BOOKMARK,
  TOGGLE_SIDEBAR,
  DATA_TABLE_SORT_BY
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

const dataTableSortBy = (state, title) => {
  state.dataTable.contents.sort((a, b) => {
    if (state.dataTable.sortType === 'asc') {
      if(typeof a[title] == 'string') return a[title].localeCompare(b[title])
      if(typeof a[title] == 'number') return a[title] < b[title] ? 1 : -1    
    }

    if (state.dataTable.sortType === 'desc') {
      if(typeof a[title] == 'string') return b[title].localeCompare(a[title])
      if (typeof a[title] == 'number') return a[title] > b[title] ? 1 : -1
    }
    return 0;
  });
  
  if (state.dataTable.sortType === "asc") {
    state.dataTable.sortType = "desc"
  } else {
    state.dataTable.sortType = "asc"
  }
  
  return { ...state };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_POST_TO_BOOKMARK:
      return addPostToBookmark(state, action.post);
    case REMOVE_POST_FROM_BOOKMARK:
      return removePostFromBookmark(state, action.postId);
    case TOGGLE_SIDEBAR:
      return toggleSidebar(state);
    case DATA_TABLE_SORT_BY:
      return dataTableSortBy(state, action.title);
    default:
      return state;
  }
};
