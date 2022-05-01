import React,{useEffect} from 'react';

import { connect } from 'react-redux';
import {getElectionPhase} from "../../../../redux/ActionCreaters/Web3Actions"
import  "./Result"

const Result = (props) => {

    useEffect(()=>{  
        console.log(props.Web3Reducer);
            props.getElectionPhase()        
     },[])
  
  
  return (
    <div class="">
       Not declared
       <p>
           {props.web3Reducer.adminData.electionphase}
       </p>

    </div>
  
  );
};
  

const mapStateToProps=({web3Reducer,user})=>{
    return {web3Reducer,user}
  }
  export default connect(mapStateToProps,{getElectionPhase})(Result);  