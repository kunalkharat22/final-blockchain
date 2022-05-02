import React,{useEffect} from 'react';

import { connect } from 'react-redux';
import {getElectionPhase} from "../../../../redux/ActionCreaters/Web3Actions"
import  "./Result"

import List_candidates from './ListOfCandidates/List_candidates';

const Result = (props) => {

    
  
  
  return (
    <div>
          
          { props.web3Reducer.adminData.electionphaseloading ? <p>Loading</p> : ( !props.web3Reducer.adminData.electionphaseloading  && props.web3Reducer.adminData.electionphase ?
            
            <p>ON</p> :
            
          ( !props.web3Reducer.adminData.electionphaseloading  && !props.web3Reducer.candidateLoading  && <List_candidates candidates={props.web3Reducer.candidates}> </List_candidates>)
          )}
         
       

    </div>
  
  );
};
  

const mapStateToProps=({web3Reducer,user})=>{
    return {web3Reducer,user}
  }

  export default connect(mapStateToProps,{getElectionPhase})(Result);  