import { combineReducers } from 'redux';
import {userReducer} from "./UserReducer"
import {web3Reducer} from "./Web3Reducer"

export default combineReducers({
    web3Reducer:web3Reducer,
    user:userReducer,    

});
