import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Todo {
  id: string;
  title: string;
  description: string;
}

interface TodosState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    removeFromList(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    clearRemoved(state) {
      state.todos = [];
    },
  },
});

export const { removeFromList, clearRemoved } = todosSlice.actions;
export default todosSlice.reducer;
