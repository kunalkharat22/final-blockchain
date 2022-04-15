import React from 'react';
import "./ElectionStatus.css"

function ElectionStatus(props) {
    return (
        <div>
             <h1 class="color-green h1t">Election Status </h1> 
            
             <h5 class="mr-10">Current Status :</h5>
             <h2 class="color-green h2 h2-voting"> Voting</h2> 
             <button class="signIn-btn btn text-align-center bg-green1 btn-changePhase">Change Phase</button>

        </div>
    );
}

export default ElectionStatus;