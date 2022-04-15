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
            <th>Age</th>
            <th>Qualification</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>ABC</td>
            <td>r</td>
            <td>45</td>
            <td>B.E</td>            
            <button  class="delete-btn">Delete</button>
        </tr>
        <tr >
             <td>2</td>
            <td>XYZ</td>
            <td>rS</td>
            <td>25</td>
            <td>B.COM</td>
            <button  class="delete-btn">Delete</button>
        </tr>
    </tbody>
</table>

        </div>
    );
}

export default List;

