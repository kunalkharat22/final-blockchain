import React from 'react';
import "./CandidateList.css"

const CandidateList = (props) => {

const Vote=(id)=>{
    console.log("Vote for candidate having id"+id)
    props.vote(id);
}

    return (
      <div> 
      <h2 class="color-green1 h2t"> List Of Candidates</h2> 
         
 <table class="styled-table">
 <thead>
     <tr className='table-head'>
         <th>Sr.</th>
         <th>Candidate Name</th>
         <th>Party</th>
         <th>Age</th>
         <th>Qualification</th>
     </tr>
 </thead>
 <tbody>
     
     {props.candidatedList&&props.candidatedList[0]&&props.candidatedList.map((candidate)=>{
           return(
           <tr>
             <td>{candidate.id}</td>
              <td>{candidate.name}</td>
              <td>{candidate.party}</td> 
              <td>{candidate.age}</td>             
              <td>{candidate.qualification}</td>  
              <button onClick={()=>{Vote(candidate.id)}} className="delete-btn" >Vote</button>
            </tr>
            
            )
       })
    } 
 </tbody>
</table>

     </div> 
      
    );
};

export default CandidateList;