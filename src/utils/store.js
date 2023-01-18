import { combineReducers, createStore } from "redux";
import userReducer from "../features/reducer/user";

const reducer = combineReducers({
    user: userReducer
})

const store = createStore(reducer)

export default store