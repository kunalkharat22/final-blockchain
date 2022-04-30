import {
    USER_LOGOUT ,LOAD_USER ,
    USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCESS,USER_SIGNIN_FAIL
    ,OTP_INVALID,OTP_SENT,OTP_VERIFIED,OTP_SENT_ERROR,
    VERIFY_AUTH_REQUEST,VERIFY_AUTH_SUCCESS,
    ADMIN_SIGNIN_SUCCESS,ADMIN_SIGNIN_REQUEST,ADMIN_SIGNIN_FAIL

} from "../actions"


const initialState={
    loading:true,
    userInfo:{},
    userError_signin:null,
    otpsent:false,
    otpVerified:false,
    invalidAdhar:false,
    otpInvalid:false,
    isAuthenticated: false,
    isVerifying: false,
    isAdmin:false,
    adminInfo:{},
    adminSignInError:null
    
}


export const  userReducer=(state=initialState,action)=>{
    switch(action.type){

        case OTP_INVALID:
            return{
               ...state,
               otpInvalid:action.payload ,
               otpsent:false 
            }
         case OTP_SENT_ERROR:
            return{
               ...state,
               invalidAdhar:action.payload,
              

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
         userError_signin:null,
         otpsent:false,
         otpVerified:false,
         otpInvalid:false,
         isAuthenticated: false,
         isVerifying: false,
         isAdmin:false,
         adminInfo:{},
         adminSignInError:null
         
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
            userInfo:action.payload.user,
            userProfile:action.payload.userProfile,
            loading: false,
            isAuthenticated: true,
         }
     
     case USER_SIGNIN_FAIL:
         return{
            ...state,
            loading:false,
            userError_signin:action.payload
         }
      case ADMIN_SIGNIN_REQUEST:
         return{
            ...state,
            loading:true,

         }

      case ADMIN_SIGNIN_FAIL:
         return{
            ...state,
            loading:false,
            adminSignInError:action.payload
         }

      case ADMIN_SIGNIN_SUCCESS:
         return{
            ...state,
            isAdmin:true,
            loading:false,
            adminInfo:action.payload,
            loading: false,
            isAuthenticated: true,
         }

     default :
     return state;  
    }
    }