import { combineReducers } from "redux";
import auth from "./auth";
import ports from "./ports";
import quoteRequest from './quoteRequest';


export default combineReducers({
    auth: auth,
    ports: ports,
    quoteRequest: quoteRequest
});
