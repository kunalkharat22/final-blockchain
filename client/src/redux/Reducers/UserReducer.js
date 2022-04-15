import {
    USER_LOGOUT ,LOAD_USER ,
    USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCESS,USER_SIGNIN_FAIL
    ,OTP_INVALID,OTP_SENT,OTP_VERIFIED,
    VERIFY_AUTH_REQUEST,VERIFY_AUTH_SUCCESS
} from "../actions"


const initialState={
    loading:true,
    userInfo:{},
   userError_signin:false,
    otpsent:false,
    otpVerified:false,
    otpInvalid:false,
    isAuthenticated: false,
    isVerifying: false,
    
}


export const  userReducer=(state=initialState,action)=>{
    switch(action.type){

        case OTP_INVALID:
            return{
               ...state,
               otpInvalid:true , 
            }
            case OTP_SENT:
                return{
                   ...state,
                   otpsent:true , 
                }
                case OTP_VERIFIED:
                    return{
                       ...state,
                       otpVerified:true , 
                    }
    
    case LOAD_USER:
            return{
               ...state,
               userInfo:action.payload , 
            }
   case USER_LOGOUT:
      return{
         loading:true,
         userInfo:{},
        userError_signin:false,
         otpsent:false,
         otpVerified:false,
         otpInvalid:false,
         isAuthenticated: false,
         isVerifying: false,
      }
      
        case VERIFY_AUTH_REQUEST:
                return{
                   ...state,
                   isVerifying: true, 
                }
         case VERIFY_AUTH_SUCCESS:
                    return{
                       ...state,
                       isVerifying: false, 
                    }
         
            
     case USER_SIGNIN_REQUEST:
         return{
            ...state,
            loading:true , 
         }
         
     case USER_SIGNIN_SUCCESS:
        return{
            ...state,
            loading:false,
            userInfo:action.payload,
            loading: false,
            isAuthenticated: true,
         }
     
     case USER_SIGNIN_FAIL:
         return{
            ...state,
            loading:false,
            userError_signin:action.payload
         } 
     default :
     return state;  
    }
    }