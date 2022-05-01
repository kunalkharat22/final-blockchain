import React from 'react';
import "./list.css"

function List(props) {
    return (
        <div> 
         <h2 class="color-green1 h2t"> List Of Candidates</h2> 
            
    <table class="styled-table">
    <thead>
        <tr className='table-head'>
            <th>Sr.</th>
            <th>Candidate Name</th>
            <th>Party</th>
            <th>Qualification</th>
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
              
            <button  class="delete-btn" onClick={()=>{props.DeleteCandidate(candidate.id)}}>Delete</button> 
              
            </tr>
                        
            
            )
            }
       })
    } 
     
    </tbody>
</table>
 {  props.Web3Reducer.adminData.loading && <h4 class="color-green mt-20 ">Loading</h4>     }
           
{  !props.Web3Reducer.adminData.loading && props.Web3Reducer.adminData.deleteCandidateSuccess && <h4 class="color-green mt-20 ">Candidate Deleted Succesfully</h4>     }
           

        </div>
    );
}

export default List;

