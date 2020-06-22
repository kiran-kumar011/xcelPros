import { createAction } from '@reduxjs/toolkit';

const addNewPage = ({ params }) => {
  const action = createAction('ADD_NEW_PAGE')({ params });
  return action;
};

export { addNewPage };
