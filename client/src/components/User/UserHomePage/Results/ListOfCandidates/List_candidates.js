import React from 'react';
import "./List_candidates.css"

function List_candidates(props) {
    console.log(props.candidates);
    return (

        
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
           if(candidate.id !='0'){
          return(
           <tr>
             <td>{candidate.id}</td>
              <td>{candidate.name}</td>
              <td>{candidate.party}</td> 
              <td>{candidate.qualification}</td>             
              <td>{candidate.voteCount}</td>  
              
            </tr>
            
            )}
       })
    } 

    </tbody>
</table>

    );
}

export default List_candidates;

