import { createAction } from '@reduxjs/toolkit';

const swapTodoColumn = ({ params }) => {
  const action = createAction('SWAP_TODO_COLUMN')({ params });
  return action;
};

export { swapTodoColumn };
