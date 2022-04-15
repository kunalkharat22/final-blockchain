import React from 'react';
import "./List_candidates.css"

function List_candidates(props) {
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
        </tr>
        <tr >
             <td>2</td>
            <td>XYZ</td>
            <td>rS</td>
            <td>25</td>
            <td>B.COM</td>
        </tr>
    </tbody>
</table>

        </div>
    );
}

export default List_candidates;

