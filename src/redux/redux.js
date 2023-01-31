import { combineReducers, createStore } from "redux";
import weatherReducer from "./weatherReducer";

const reduxReducer = combineReducers({
    weatherPage: weatherReducer
})

const store = createStore(reduxReducer)

export default store;