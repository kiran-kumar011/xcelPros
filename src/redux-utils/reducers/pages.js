import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  pages: [],
  isHidden: false,
};

const reducer = createReducer(initialState, {
  ADD_NEW_PAGE: (state, action) => {
    state.pages.push({ ...action.payload.params.page });
  },
  ADD_NEW_ITEM: (state, action) => {
    const { pages, todo, id } = action.payload.params;
    console.log(pages, 'pages');
    console.log(todo, 'action');
    const newPages = pages.map((itm) => {
      console.log(itm.id === id, 'page item');
      if (itm.id === id) {
        return { ...itm, todos: [...itm.todos, todo] };
      } else {
        return itm;
      }
    });

    state.pages = newPages;
  },
  TOGGLE_PAGES_DISPLAY: (state) => {
    state.isHidden = !state.isHidden;
  },
  SWAP_TODO_COLUMN: (state, action) => {
    state.pages = action.payload.params.pages;
  },
});

export default reducer;
