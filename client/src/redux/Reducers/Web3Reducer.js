import {
  INIT_BLOCKCHAIN_REQUEST,INIT_BLOCKCHAIN_SUCCESS,INIT_BLOCKCHAIN_FAIL,
  GET_CANDIDATES_REQUEST,GET_CANDIDATES_SUCCESS,GET_CANDIDATES_FAILURE,
  VOTE_CANDIDATE_REQUEST,VOTE_CANDIDATE_FAILURE,VOTE_CANDIDATE_SUCCESS,
  ADDCANDIDATE,
  DELETECANDIDATE,
  STARTELECTION,
  STOPELECTION,
  SET_ACCOUNT,INIT_ELECTION_CONTRACT

} from "../actions"


const initialState={
  web3:null,
  web3Loading:false,
  web3LoadingError:false,
  ElectionInstance:null,
  contractOwnerAddress:null,
  candidates:[],
  candidateLoading:false,
  get_candidateerror:false,
  account:null
    
}


export const  web3Reducer=(state=initialState,action)=>{
    switch(action.type){

      case INIT_BLOCKCHAIN_REQUEST:
        return{
           ...state,
           web3Loading:true, 
        }
        case INIT_BLOCKCHAIN_SUCCESS:
          return{
             ...state,
             web3:action.payload,
             web3Loading:false
          }
        
          case INIT_ELECTION_CONTRACT:
            return{
              ...state,
              ElectionInstance:action.payload
            }
          case SET_ACCOUNT :
            return {
              ...state,
              account:action.payload, 
            }
          case INIT_BLOCKCHAIN_FAIL:
            return{
               ...state,
               web3LoadingError:action.payload, 
            }


        case GET_CANDIDATES_REQUEST:
          return{
             ...state,
             candidateLoading:true, 
          }
          case GET_CANDIDATES_SUCCESS:
            return{
               ...state,
               candidates:action.payload , 
            }
            case GET_CANDIDATES_FAILURE:
              return{
                 ...state,
                 get_candidateerror:action.payload , 
              }
         
        
     default :
     return state;  
    }
    }