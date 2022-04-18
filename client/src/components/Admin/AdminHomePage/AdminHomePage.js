import React, { useState,useEffect  } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "./Navbar/Navbar"
import CandidateList  from './SidebarScreens/ListOfCandidates/List_candidates';
import Add_Delete_Candidates from "./SidebarScreens/Add_Delete_Candidates/Add_Delete_Candidates"
import ElectionStatus from "./SidebarScreens/ElectionStatus/ElectionStatus"
import UserStat from "./SidebarScreens/UserStatistics/UserStat"
import { connect } from 'react-redux';
import "./AdminHomePage.css"
import {initWeb3,addCandidates,changeElectionPhase,DeleteCandidate} from "../../../redux/ActionCreaters/Web3Actions"


const AdminHomePage = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const web3Data = props.web3Reducer;
    const {  web3,  web3Loading, web3LoadingError, ElectionInstance,contractOwnerAddress,  candidates,  candidateLoading,
      get_candidateerror, account
        } =web3Data
      console.log(web3Data);
    
    useEffect(()=>{        
      props.initWeb3();      
    },[])


     return (
    <div class="main">            
    <div className='comp-left'>
      <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} history={props.history}/>
      </div>
      
    <div className='comp-right'>
      <div class="comp-right-wrapper">
     {
        activeIndex ==0 ? <CandidateList candidates={candidates}></CandidateList> :
       (activeIndex ==1 ? <Add_Delete_Candidates addCandidates={props.addCandidates} DeleteCandidate={props.DeleteCandidate} candidates={candidates}></Add_Delete_Candidates> :
        (activeIndex ==2 ? <ElectionStatus ElectionInstance={ElectionInstance} changeElectionPhase={props.changeElectionPhase}></ElectionStatus> : <UserStat></UserStat>   
          )
        ) 
     }
     </div>
  
           </div>            
        </div>
    );
};


const mapStateToProps=({web3Reducer})=>{
  return {web3Reducer}
}
export default connect(mapStateToProps,{initWeb3,addCandidates,changeElectionPhase,DeleteCandidate})(AdminHomePage);
