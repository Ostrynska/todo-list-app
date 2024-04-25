import { RootState } from '../store';

export const selectTodoList = (state: RootState) => state.todos.todos;

