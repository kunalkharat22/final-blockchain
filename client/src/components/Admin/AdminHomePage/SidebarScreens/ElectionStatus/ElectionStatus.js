import React, { useEffect, useState } from 'react';
import "./ElectionStatus.css"

function ElectionStatus(props) {
    

    useEffect(()=>{  
       console.log(props.Web3Reducer);
           props.getElectionPhase()        
    },[])
  
    const changePhase=()=>{        
        props.changeElectionPhase();

    }
    return (
        <div>
             <h1 class="color-green h1t">Election Status </h1> 
            
             <h5 class="mr-10">Current Status :</h5>
             {props &&  props.Web3Reducer&&  props.Web3Reducer.adminData &&  props.Web3Reducer.adminData.electionphaseloading && <h4 class="color-green mt-20 ">Loading State</h4>     }
           
             { props &&  props.Web3Reducer&&  props.Web3Reducer.adminData && !props.Web3Reducer.adminData.electionphaseloading &&<h2 class="color-green h2 h2-voting"> { props.Web3Reducer.adminData.electionphase ? "Started" : "Stopped"}</h2> }
             <button class="signIn-btn btn text-align-center bg-green1 btn-changePhase" onClick={()=>{changePhase()}}>Change Phase</button>

        </div>
    );
}

export default ElectionStatus;