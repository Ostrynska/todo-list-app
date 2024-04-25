import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import todoList from '../../db/todo-list.json'

export interface Todo {
  id: string;
  title: string;
  description: string;
}

interface TodosState {
  todos: Todo[];
  removed: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  todos: todoList.todo,
  removed: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    removedToDo(state, action: PayloadAction<string>) {
      const removedTodo = state.todos.find(todo => todo.id === action.payload);
        if (removedTodo) {
          state.removed.push(removedTodo);
          state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    },
    deleteFromRemoved(state, action: PayloadAction<string>) {
      state.removed = state.removed.filter(todo => todo.id !== action.payload);
    },
  },
});


export const { removedToDo, deleteFromRemoved } = todosSlice.actions;

export default todosSlice.reducer;
