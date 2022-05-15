import { combineReducers } from "redux";
import managerReducer from "./managerReducer";

const comb_reducers = combineReducers({
    allReducers: managerReducer,
});

export default comb_reducers;