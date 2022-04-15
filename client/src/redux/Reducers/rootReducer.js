import { combineReducers } from 'redux';
import {adminReducer} from "./AdminReducer"
import {userReducer} from "./UserReducer"

export default combineReducers({
    admin:adminReducer,
    user:userReducer,    

});
