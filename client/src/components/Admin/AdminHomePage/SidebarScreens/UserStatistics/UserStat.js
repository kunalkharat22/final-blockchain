import React from 'react';
import "./UserStat.css"


import Donut from "./PieChart/PieChart"
import Bar from "./BarChart/BarChart"

function UserStat(props) {
    return (
        <div class="wrapper-charts">
               <h1 class="color-green  stat-title">Summary Votes </h1> 
               <Donut   series={[44,56]}  labels={ ['Voted', 'Not Voted'] } colors={ ['	#3BD172', '#3A3FCF'] } ></Donut>
               <h1 class="color-green  stat-title">Gender and Age </h1> 
               
               <Donut series={[29,71]}  labels={ ['Female', 'Male'] }  colors={ ['#DE3980', '#2C6DDD'] }></Donut>
               
               <h1 class="color-green  stat-title"> Age </h1> 
               <Bar class="mr-20"></Bar>

              
        </div>
    );
}

export default UserStat;