import { RootState } from '../store';

export const selectTodoList = (state: RootState) => state.todos.todos;

export const selectRemovedList = (state: RootState) => state.todos.removed;

