import {USER_REGISTER_FAILURE,USER_REGISTER_SUCCESS,USER_REGISTER_REQUEST} from "../actions"


const initialState={
    loading:true,
    adminInfo:{},
    admin_signin:null,
    admin_register:null
}


export const  adminReducer=(state=initialState,action)=>{
    return state;
    }

