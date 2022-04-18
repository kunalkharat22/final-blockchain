import React, { useEffect, useState } from 'react';
import "./ElectionStatus.css"

function ElectionStatus(props) {
    const [electionState,setElectionState]=useState();

    useEffect(()=>{  
        const fetchData = async () => {
            const val=await props.ElectionInstance.methods.getStart().call()
            const val1=await props.ElectionInstance.methods.getEnd().call()
   
            setElectionState(val)
          }
        
          fetchData()     
        
    })
  
    const changePhase=()=>{

        props.changeElectionPhase();

    }
    return (
        <div>
             <h1 class="color-green h1t">Election Status </h1> 
            
             <h5 class="mr-10">Current Status :</h5>
             <h2 class="color-green h2 h2-voting"> { electionState ? "Started" : "Stopped"}</h2> 
             <button class="signIn-btn btn text-align-center bg-green1 btn-changePhase" onClick={()=>{changePhase()}}>Change Phase</button>

        </div>
    );
}

export default ElectionStatus;