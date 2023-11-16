import {combineReducers, configureStore} from '@reduxjs/toolkit';

import tasksSlice from "../../entities/tasksSlice";
import trashSlice from "../../entities/trashSlice";

const rootReducer = combineReducers({
  tasksSlice,
  trashSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;