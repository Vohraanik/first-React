import { combineReducers } from "redux";
import counterSlice from "../slice/counter.slice";


export const rootReducer = combineReducers({

    counter_slice:counterSlice,
});