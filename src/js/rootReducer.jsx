import { combineReducers } from "redux";
import searchReducer from "./components/search/searchReducer";

const rootReducer = combineReducers({
  // add reducers
  search: searchReducer
});

export default rootReducer;
