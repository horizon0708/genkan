import { taskReducer } from "./task";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  task: taskReducer
});

export type RootState = ReturnType<typeof rootReducer>;
