import { createAction } from '@reduxjs/toolkit';

const addNewTodo = ({ params }) => {
  const action = createAction('ADD_NEW_ITEM')({ params });
  console.log('add new item  action invoked', params);
  return action;
};

export { addNewTodo };
