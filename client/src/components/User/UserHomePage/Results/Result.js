import React,{useEffect} from 'react';

import { connect } from 'react-redux';
import {getElectionPhase} from "../../../../redux/ActionCreaters/Web3Actions"
import  "./Result"

import List_candidates from './ListOfCandidates/List_candidates';

const Result = (props) => {


    useEffect(()=>{  
        console.log(props.web3Reducer.candidates);
            props.getElectionPhase()   


           const result= props.web3Reducer.candidates.sort(function(a, b){
              return b.voteCount - a.voteCount;
              //return b.id - a.id;
              
          });
          console.log(result)

          
          result.map((candidate)=>{
              if(candidate.id !='0'){
               console.log(" user - ");
               console.log(candidate.id);
               console.log(candidate.name);
               console.log(candidate.party);
               console.log(candidate.qualification);
               console.log(candidate.voteCount);
                 
              }
          })
       

     },[])
  
  
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