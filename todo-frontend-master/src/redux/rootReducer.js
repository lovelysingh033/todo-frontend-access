import { combineReducers } from "redux";
import boardReducer from "./boards/boardReducer";
import taskReducer from "./tasks/taskReducer";

const rootReducer = combineReducers({
  board: boardReducer,
  task: taskReducer,
});

export default rootReducer;
