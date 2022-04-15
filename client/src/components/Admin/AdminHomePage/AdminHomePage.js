import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "./Navbar/Navbar"
import CandidateList  from './SidebarScreens/ListOfCandidates/List_candidates';
import Add_Delete_Candidates from "./SidebarScreens/Add_Delete_Candidates/Add_Delete_Candidates"
import ElectionStatus from "./SidebarScreens/ElectionStatus/ElectionStatus"
import UserStat from "./SidebarScreens/UserStatistics/UserStat"
import "./AdminHomePage.css"


const AdminHomePage = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

     return (
    <div class="main">            
    <div className='comp-left'>
      <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} history={props.history}/>
      </div>
      
    <div className='comp-right'>
      <div class="comp-right-wrapper">
     {
        activeIndex ==0 ? <CandidateList ></CandidateList> :
       (activeIndex ==1 ? <Add_Delete_Candidates></Add_Delete_Candidates> :
        (activeIndex ==2 ? <ElectionStatus></ElectionStatus> : <UserStat></UserStat>   
          )
        ) 
     }
     </div>
  
           </div>            
        </div>
    );
};

export default AdminHomePage;