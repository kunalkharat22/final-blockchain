import React,{useEffect,useState} from 'react';
import "./UserStat.css"
import Donut from "./PieChart/PieChart"
import Bar from "./BarChart/BarChart"

import { connect } from 'react-redux';
import {auth,firebaseApp,database } from "../../../../../firebase";

function UserStat(props) {
    const [voteCount,setVoteCount]=useState(0);
    const [totalUsers,setTotalUsers]=useState(0);
    const [displayPie,setdisplayPie]=useState(false);   

    useEffect(()=>{

        const fetchData = async () => {
            //votes from ganache            
        
            const voteCount = await props.web3Reducer.ElectionInstance.methods.voteCount().call()      
            setVoteCount(parseInt(voteCount))
            console.log( voteCount);
        //total users from firebase
        var dbRef = database.ref('users' );

    var allUser=[]
      
   await dbRef.once('value',   function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
       allUser.push(childData)      

    });
  }).then(snap => {
    console.log(allUser);
    /*  allUser.filter(({gender}) => gender === 'BOYS')
   .reduce((sum, record) => sum + record.value)  */
        setTotalUsers(allUser.length)
        
        console.log( ` no of people voted  - ${voteCount}   ||total no of people ${allUser.length}   ||   no of people not voted :- ${allUser.length-voteCount}`);

        setdisplayPie(true)       

    })

    }       
          // call the function
          fetchData()    



    },[])

    return (
        <div class="wrapper-charts">
               <h1 class="color-green  stat-title">Summary Votes </h1> 

             { displayPie&&  <Donut series={[voteCount,totalUsers-voteCount]}  labels={ ['Voted', 'Not Voted'] } colors={ ['#3BD172', '#3A3FCF'] } ></Donut>
           }
           
            { /*  <h1 class="color-green  stat-title">Gender and Age </h1> 
               
               <Donut series={[29,71]}  labels={ ['Female', 'Male'] }  colors={ ['#DE3980', '#2C6DDD'] }></Donut>
               
               <h1 class="color-green  stat-title"> Age </h1> 
    <Bar class="mr-20"></Bar> */}

              
        </div>
    );
}

const mapStateToProps=({web3Reducer,user})=>{
    return {web3Reducer,user}
  }

  export default connect(mapStateToProps,{})(UserStat);  