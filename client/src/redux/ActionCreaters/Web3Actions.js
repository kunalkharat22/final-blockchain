import {
    INIT_BLOCKCHAIN_REQUEST,INIT_BLOCKCHAIN_SUCCESS,INIT_BLOCKCHAIN_FAIL,
    GET_CANDIDATES_REQUEST,GET_CANDIDATES_SUCCESS,GET_CANDIDATES_FAILURE,
    VOTE_CANDIDATE_REQUEST,VOTE_CANDIDATE_FAILURE,VOTE_CANDIDATE_SUCCESS,
    ADD_CANDIDATES_REQUEST,ADD_CANDIDATES_SUCCESS,ADD_CANDIDATES_FAILURE,
    DELETECANDIDATE,
    STARTELECTION,
    STOPELECTION,
    SET_ACCOUNT,INIT_ELECTION_CONTRACT,
    ELECTION_PHASE_CHANGE_REQUEST,ELECTION_PHASE_CHANGE_SUCCESS,ELECTION_PHASE_CHANGE_FAILURE,
    DELETE_CANDIDATES_REQUEST,DELETE_CANDIDATES_FAILURE,DELETE_CANDIDATES_SUCCESS
  
  } from "../actions"

  
import Election from "../../contracts/Election.json";
import getWeb3 from "../../getWeb3";

  
  
export const initWeb3=() => async (dispatch,getState) => {
    window.ethereum.on("accountsChanged", async function() {
        // Time to reload your interface with accounts[0]!
        accounts = await web3.eth.getAccounts();
        if(web3){
          //setaccount(accounts[0])
          console.log(accounts);
          dispatch({ type: SET_ACCOUNT,payload:accounts[0]}); 
        }         
       
      });
      
      const web3 = await getWeb3();
      //setweb3(web3)
      console.log(web3);
  
      // Use web3 to get the user's accounts.
      let accounts = await web3.eth.getAccounts();
     // setaccount(accounts[0]) 
     dispatch({ type: SET_ACCOUNT,payload:accounts[0]}); 
     dispatch({ type: INIT_BLOCKCHAIN_SUCCESS,payload:web3});  

     dispatch(initContract())
  

}
  

  
export const initContract=() => async (dispatch,getState) => {
       
  const networkId = await getState().web3Reducer.web3.eth.net.getId();
 
  let  deployedNetwork =  Election.networks[networkId];

  if(deployedNetwork){
      const web3=getState().web3Reducer.web3;
      const ElectionInstance = new web3.eth.Contract( Election.abi, deployedNetwork.address );
      
      //setElectionInstance(ElectionInstance)

      console.log(ElectionInstance);
      dispatch({ type: INIT_ELECTION_CONTRACT,payload:ElectionInstance }); 
      
      dispatch(getCandidates())
      

     
     }
     else{
       console.log("Election contract not found");
     }
}

  
export const getCandidates=() => async (dispatch,getState) => {
  dispatch({ type: GET_CANDIDATES_REQUEST, }); 
  

    if(getState().web3Reducer.ElectionInstance){
        //setOwner
      const owner = await getState().web3Reducer.ElectionInstance.methods.owner().call();
      //setContractOwnerAddress(owner)
      console.log("contractOwner is"+owner);
      var data=[]
      
      const candidateCount = await getState().web3Reducer.ElectionInstance.methods.candidatesCount().call()
      console.log(candidateCount);
       for (var i = 1; i <=candidateCount; i++) {
         const candidate = await getState().web3Reducer.ElectionInstance.methods.candidates(i).call()
         data=[...data,candidate]
       }  
       console.log(data);                
     
       dispatch({ type: GET_CANDIDATES_SUCCESS,payload:data }); 
      }else{
        dispatch({ type: GET_CANDIDATES_FAILURE }); 
   
      }
}

  
export const addCandidates=(data) => async (dispatch,getState) => { 
 
  dispatch({ type: ADD_CANDIDATES_REQUEST, });

  if(getState().web3Reducer.ElectionInstance){
    console.log("data is " , data);
    console.log(getState().web3Reducer.ElectionInstance);
    getState().web3Reducer.ElectionInstance.methods.addCandidate(data.name,data.party,data.qualification).send({from:getState().web3Reducer.account });
     
      
     getState().web3Reducer.ElectionInstance.events.AddedEvent({
      fromBlock: 0
   }, function(error, event){
     if(error){   
      dispatch({ type: ADD_CANDIDATES_FAILURE, });
     }else{
      dispatch({ type: ADD_CANDIDATES_SUCCESS, });
      }
     })

     dispatch(getCandidates())
    }else{
      dispatch({ type: ADD_CANDIDATES_FAILURE, });
    }
}


export const VoteCandidate=(id) => async (dispatch,getState) => { 
   
  dispatch({ type: VOTE_CANDIDATE_REQUEST });

  getState().web3Reducer.ElectionInstance.methods.vote(id).send({from : getState().web3Reducer.account });
  
  getState().web3Reducer.ElectionInstance.events.votedEvent({
    fromBlock: 0
 }, function(error, event){
   if(error){
    dispatch({ type: VOTE_CANDIDATE_FAILURE });
   }else{
    dispatch({ type: VOTE_CANDIDATE_SUCCESS });
    }
   })


}

export const DeleteCandidate=(id) => async (dispatch,getState) => { 
   
  dispatch({ type: DELETE_CANDIDATES_REQUEST });

  getState().web3Reducer.ElectionInstance.methods.deleteCandidate(id).send({from : getState().web3Reducer.account });
  
  getState().web3Reducer.ElectionInstance.events.DeletedEvent({
    fromBlock: 0
 }, function(error, event){
   if(error){
     console.log(error);
    dispatch({ type: DELETE_CANDIDATES_FAILURE });
   }else{
     console.log(event);
    dispatch({ type: DELETE_CANDIDATES_SUCCESS });
    }
   })


}


export const  changeElectionPhase=(data) => async (dispatch,getState) => { 
 
  dispatch({ type: ELECTION_PHASE_CHANGE_REQUEST });
  
  
  const va2=await getState().web3Reducer.ElectionInstance.methods.getStart().call()
   
  if (va2) {
    //  block of code to be executed if the condition is true
    getState().web3Reducer.ElectionInstance.methods.endElection().send({from:getState().web3Reducer.account })
  
  } else {
    getState().web3Reducer.ElectionInstance.methods.startElection().send({from:getState().web3Reducer.account })
  }
    
    getState().web3Reducer.ElectionInstance.events.VotingStartedEvent({
      fromBlock: 0
   }, function(error, event){
     if(error){
      dispatch({ type: ELECTION_PHASE_CHANGE_FAILURE });
     }else{
      dispatch({ type: ELECTION_PHASE_CHANGE_SUCCESS });
      }
     })

     getState().web3Reducer.ElectionInstance.events.VotingEndedEvent({
      fromBlock: 0
   }, function(error, event){
     if(error){
      dispatch({ type: ELECTION_PHASE_CHANGE_FAILURE });
     }else{
      dispatch({ type: ELECTION_PHASE_CHANGE_SUCCESS });
      }
     })



  }