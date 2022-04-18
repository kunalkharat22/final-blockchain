import React, { useState } from 'react';

import List from "./List/List.js"

import "./Add_Delete_Candidates.css"


function Add_Delete_Candidates(props) {
const [active,setActive]=useState(1)
const [data,setData]=useState({
    name:"",
    party:"",
    qualification:""
})

const onChangeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})   
}  

const AddCandidates=()=>{
    console.log(data);
    props.addCandidates(data);
}

const DeleteCandidate=(id)=>{
    console.log(id);
    props.DeleteCandidate(id);
}

    return (
        <div>
            <div className='d-flex-row'>
            <button class={ active == 1 ?"btn3 btn1 " :"btn3 btn2 color-green1"} onClick={()=>{setActive(1)}}> Add  Candidate</button>
            
            <button class={ active == 2 ?"btn3 btn1 " :"btn3 btn2 color-green1"}  onClick={()=>{setActive(2)}} >Delete  candidate</button>
            </div>
         { active==1?
            <div>
            <div className='addCan bg-white'>
               
               <input type="text" placeholder='Enter Candidate Name' name="name" value={data.name} onChange={(e)=>{onChangeHandler(e)}}></input>
               
               <input type="text" placeholder='Enter Candidate Party' name="party" value={data.party}onChange={(e)=>{onChangeHandler(e)}}></input>
              
               
               <input type="text" placeholder='Enter Qualification' name="qualification" value={data.qualification} onChange={(e)=>{onChangeHandler(e)}}></input>
            </div>
            <button class="signIn-btn btn text-align-center bg-green1" onClick={()=>{AddCandidates()}}>Add</button>
            </div>:
            
            <div>
        
            <div className=''>
                <List candidates={props.candidates} DeleteCandidate={DeleteCandidate}></List>
            </div>
            </div>
            }
        </div>
    );
}


export default Add_Delete_Candidates;