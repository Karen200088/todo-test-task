import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {mockTasks} from "./mock/mockTasks";

export interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  status: 'Pending' | 'Completed' | 'Overdue' | 'Removed';
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: mockTasks,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    removeTask: (state, action: PayloadAction<number>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    markAsComplete: (state, action: PayloadAction<number>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks[index].status = 'Completed';
      }
    },
    markAsOverdue: (state, action: PayloadAction<number>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks[index].status = 'Overdue';
      }
    }
  },
});

export const { addTask, editTask, removeTask, markAsComplete, markAsOverdue } = tasksSlice.actions;
export default tasksSlice.reducer;
