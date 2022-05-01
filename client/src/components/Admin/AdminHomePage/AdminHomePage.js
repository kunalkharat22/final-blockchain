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
    
    useEffect(()=>{        

      if(props.user &&  !props.user.isAdmin){ 

        alert("sending to user/home")
        props.history.push("/user/home")
      }  else{
      // alert("initWeb");
       props.initWeb3();  
      }
    },[])

    

    if (!web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

     return (
    <div class="main">            
    <div className='comp-left'>
      <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} history={props.history}/>
      </div>
      
    <div className='comp-right'>
      <div class="comp-right-wrapper">
     {
        activeIndex ==0 ? <CandidateList candidates={candidates}></CandidateList> :
       (activeIndex ==1 ? <Add_Delete_Candidates addCandidates={props.addCandidates} DeleteCandidate={props.DeleteCandidate} candidates={candidates} Web3Reducer={props.web3Reducer}></Add_Delete_Candidates> :
        (activeIndex ==2 ? <ElectionStatus ElectionInstance={ElectionInstance} changeElectionPhase={props.changeElectionPhase}></ElectionStatus> : <UserStat></UserStat>   
          )
        ) 
     }
     </div>
  
           </div>            
        </div>
    );
};


const mapStateToProps=({web3Reducer,user})=>{
  return {web3Reducer,user}
}
export default connect(mapStateToProps,{initWeb3,addCandidates,changeElectionPhase,DeleteCandidate})(AdminHomePage);
