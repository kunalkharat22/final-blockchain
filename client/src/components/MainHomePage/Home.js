import React, { useState } from 'react';
import "./Home.css"
import {database} from '../../firebase';

function Home (props) {
   
   const RegisterVoterClicked=()=>{
    console.log(props);
      props.history.push("/user/login")

    }

    const RegisterAdminClicked=()=>{
       props.history.push("/admin/login")
    }



    return (
        <div class="main-holder">
				
	<div class="content">
			<h1>E - VOTING PORTAL</h1>
			<h2>A Blockchain based online voting system</h2>
		
			<h3> Considering all the problems associated with the current election system of India such as vote tampering, standing in long lines to cast votes, booth capturing etc. 
We are focused on eradicating such problems and bring about transparency, authentication in our voting procedure. 
        </h3>
	<button class="signIn-btn btn-getStarted btn text-align-center btn-bg-green" onClick={()=>{RegisterVoterClicked()}}> Voter Login </button>   
	<button class="signIn-btn btn-getStarted btn text-align-center btn-bg-green" onClick={()=>{RegisterAdminClicked()}}>Admin Login </button>   
	
	</div>

        </div>
        
    );
};

export default Home;