import React, { useState,useEffect } from 'react';


import CandidateList from "../CandidateList/CandidateList"
import Results from "../UserHomePage/Results/Result"
import Navbar from  "./Navbar"
import {initWeb3,VoteCandidate} from "../../../redux/ActionCreaters/Web3Actions"
import { connect } from 'react-redux';
import "./UserHomePage.css"

const UserHomePage = (props) => {
    
  const [activeIndex, setActiveIndex] = useState(0);

    const web3Data = props.web3Reducer;
    const {  web3,  web3Loading, web3LoadingError, ElectionInstance,contractOwnerAddress,  candidates,  candidateLoading,
      get_candidateerror, account
        } =web3Data
      console.log(web3Data);
    
    useEffect(()=>{      
      
      console.log(props.user);     
       if(props.user  && props.user.isAdmin){
         props.history.push("/admin/home")
       }  else{
         console.log("intiWeb");
        props.initWeb3();  
        
       }
         
    },[])

      const vote=(id)=>{
      console.log(account);
      props.VoteCandidate(id)
     }
         if (!web3) {
          return <div>Loading Web3, accounts, and contract...</div>;
        }
    return (
        <div>
              
            
    <div class="main">            
    <div className='comp-left'>
           {/* Uma
            <div>The Account is: {account}</div>
             { 
               account ===contractOwnerAddress?<div>
                 Admin true
               </div>:
               <div>
                 Admin:false
               </div> 
             }
              */
            }
             <Navbar  activeIndex={activeIndex} setActiveIndex={setActiveIndex} account={account}></Navbar>
      </div>
      
      
    <div className='comp-right'>
      <div class="comp-right-wrapper">
          <div class="comp-right-wrapper">
    {!props.user.loading && props.user.userProfile.isVoted &&  <div> Your Vote has been casted </div> }
   
     {
        activeIndex ==0 ? !props.user.loading && !props.user.userProfile.isVoted  && !props.web3Reducer.candidateLoading && <CandidateList candidatedList={candidates} vote={vote} isVoted={props.user.userProfile.isVoted}>
        </CandidateList> :
      <Results ElectionInstance={ElectionInstance} changeElectionPhase={props.changeElectionPhase} Web3Reducer={props.web3Reducer} getElectionPhase={props.getElectionPhase}></Results>    
          
        
     }

       
     </div>
  
           </div>            
        </div>
            
        </div>
        </div>
    );
 }

const mapStateToProps=({web3Reducer,user})=>{
  return {web3Reducer,user}
}
export default connect(mapStateToProps,{initWeb3,VoteCandidate})(UserHomePage);