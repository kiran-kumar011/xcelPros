import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  pageTitle: 'Add New Board',
  pageId: '',
  pageData: null,
};

const reducer = createReducer(initialState, {
  UPDATE_CURRENT_PAGE: (state, action) => {
    state.pageTitle = action.payload.params.title;
    state.pageId = action.payload.params.id;
    // state.pageData = action.payload.params.data;
  },
});

export default reducer;
