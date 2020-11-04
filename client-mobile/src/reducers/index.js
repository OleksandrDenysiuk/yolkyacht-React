import { combineReducers } from "redux";
import authReducer from "./auth";
import ports from "./ports";


export default combineReducers({
  auth: authReducer,
  ports: ports
});
