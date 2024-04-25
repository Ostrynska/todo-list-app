import { combineReducers } from '@reduxjs/toolkit';

import todoListReducer from './todos/slice';

const rootReducer = combineReducers({
 todos: todoListReducer,
});

export default rootReducer;
