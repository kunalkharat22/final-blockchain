import React from 'react';
import "./List_candidates.css"

function List_candidates(props) {
    console.log(props.candidates);
    return (
        <div  class="c-details"> 
            <h1 class="color-green1 h1t">Candidates Details</h1> 
            <h2 class="color-green1 h2t"> List Of Candidates</h2> 
            
    <table class="styled-table">
    <thead>
        <tr className='table-head'>
            <th>Sr.</th>
            <th>Candidate Name</th>
            <th>Party</th>
            <th>Qualification</th>
            <th>Votes</th>
        </tr>
    </thead>
    <tbody>


        {props.candidates&&props.candidates[0]&&props.candidates.map((candidate)=>{
           return(
           <tr>
             <td>{candidate.id}</td>
              <td>{candidate.name}</td>
              <td>{candidate.party}</td> 
              <td>{candidate.qualification}</td>             
              <td>{candidate.voteCount}</td>  
              
            </tr>
            
            )
       })
    } 

    </tbody>
</table>

        </div>
    );
}

export default List_candidates;

