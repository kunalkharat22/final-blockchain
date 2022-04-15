import React, { useState } from 'react';
import "./Add_Delete_Candidates.css"

import List from "./List/List.js"

function Add_Delete_Candidates(props) {
const [active,setActive]=useState(1)

    return (
        <div>
            <div className='d-flex-row'>
            <button class={ active == 1 ?"btn3 btn1 " :"btn3 btn2 color-green1"} onClick={()=>{setActive(1)}}> Add  Candidate</button>
            
            <button class={ active == 2 ?"btn3 btn1 " :"btn3 btn2 color-green1"}  onClick={()=>{setActive(2)}} >Delete  candidate</button>
            </div>
         { active==1?
            <div>
            <div className='addCan bg-white'>
               
               <input type="text" placeholder='Enter Candidate Name'></input>
               
               <input type="text" placeholder='Enter Candidate Party'></input>
              
               <input type="text" placeholder='Enter Candidate Age'></input>              
              
               <input type="text" placeholder='Enter Qualification'></input>
            </div>
            <button class="signIn-btn btn text-align-center bg-green1">Add</button>
            </div>:
            
            <div>
        
            <div className=''>
                <List></List>
            </div>
            </div>
            }
        </div>
    );
}

export default Add_Delete_Candidates;