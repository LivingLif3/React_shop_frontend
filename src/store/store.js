import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./UserReducer"
import deviceReducer from "./DeviceReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    userReducer, 
    deviceReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store