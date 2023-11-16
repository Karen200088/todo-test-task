import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Task} from "./tasksSlice";

interface TrashState {
  trash: Task[];
}

const initialState: TrashState = {
  trash: []
};

const trashSlice = createSlice({
  name: 'trash',
  initialState,
  reducers: {
    addToTrash: (state, action: PayloadAction<Task>) => {
      state.trash.push(action.payload);
    },
  },
});

export const { addToTrash } = trashSlice.actions;
export default trashSlice.reducer;
