import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import tasksReducer from "../reducers/taskReducer";
import trashReducer from "../reducers/trashReducer";
import settingReducer from "../reducers/settingsReducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  trash: trashReducer,
  settings: settingReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
