import { createAction } from '@reduxjs/toolkit';

const toggleWorkSpace = () => {
  const action = createAction('TOGGLE_PAGES_DISPLAY')();
  return action;
};

export { toggleWorkSpace };
