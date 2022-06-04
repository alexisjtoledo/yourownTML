import { combineReducers } from "redux";
import showsReducer from "./showsReducer";

const reducers = combineReducers({
    showsList: showsReducer,
});

export default reducers;
