import { createAction } from '@reduxjs/toolkit';

const setCurrentPage = ({ params }) => {
  const action = createAction('UPDATE_CURRENT_PAGE')({ params });
  return action;
};

export { setCurrentPage };
