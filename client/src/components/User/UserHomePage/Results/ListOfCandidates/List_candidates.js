import React,{useState,useEffect} from 'react';
import UserStat from '../../../../Admin/AdminHomePage/SidebarScreens/UserStatistics/UserStat';
import "./List_candidates.css"

function List_candidates(props) {
    const [ list,setlist]=useState([])

    useEffect(()=>{  

        console.log(props.candidates);

           const result= props.candidates.sort(function(a, b){
              return b.voteCount - a.voteCount;
              
          });
          setlist(result)
       

     },[])

   
    return (

        
    <table class="styled-table">
    <thead>
        <tr className='table-head'>
            <th>Candidate Name</th>
            <th>Party</th>
            <th>Qualification</th>
            <th>Votes</th>
        </tr>
    </thead>
    <tbody>


        {list&&list[0]&&list.map((candidate)=>{
           if(candidate.id !='0'){
          return(
           <tr>
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

