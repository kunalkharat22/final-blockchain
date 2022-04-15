import React, { useState,useEffect } from 'react';

import Election from "../../../contracts/Election.json";
import getWeb3 from "../../../getWeb3";

import CandidateList from "../CandidateList/CandidateList"
import Navbar from  "./Navbar"

import "./UserHomePage.css"

const UserHomePage = (props) => {
    
    const [web3,setweb3]=useState(null)
    const [ElectionI,setElectionInstance]=useState(false)
    const [contractOwnerAddress,setContractOwnerAddress]=useState(false)    
    const [candidates,setCandidates]=useState()    
    const [account,setaccount]=useState(null)

    useEffect(()=>{   
      
        async function fetchMyAPI() {
         
           
          window.ethereum.on("accountsChanged", async function() {

            // Time to reload your interface with accounts[0]!
            accounts = await web3.eth.getAccounts();
            if(web3){
              setaccount(accounts[0])
              console.log(accounts);
            }
          
           
          });
          
          const web3 = await getWeb3();
          setweb3(web3)
          console.log(web3);
      
          // Use web3 to get the user's accounts.
          let accounts = await web3.eth.getAccounts();
          setaccount(accounts[0])
      
          
      const networkId = await web3.eth.net.getId();

     
     let  deployedNetwork =  Election.networks[networkId];
    

       if(deployedNetwork){

        const ElectionInstance = new web3.eth.Contract( Election.abi, deployedNetwork.address );
        setElectionInstance(ElectionInstance)    
        console.log(ElectionInstance);
        if(ElectionInstance){
          //setOwner
        const owner = await ElectionInstance.methods.owner().call();

        setContractOwnerAddress(owner)
        console.log("contractOwner is"+owner);
        //get all candidates
        var data=[]
        
        const candidateCount = await ElectionInstance.methods.candidatesCount().call()

        console.log(candidateCount);
         for (var i = 1; i <=candidateCount; i++) {
           const candidate = await ElectionInstance.methods.candidates(i).call()
           data=[...data,candidate]
         }  
         console.log(data);                
         setCandidates(data)

        }
       
       }
       else{
         console.log("Election contract not found");
       }

        }
  
        fetchMyAPI()
      
      //console.log(web3);

    },[])

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

             <Navbar account={account}></Navbar>
      </div>
      
      
    <div className='comp-right'>
      <div class="comp-right-wrapper">
      <CandidateList candidatedList={candidates} >

</CandidateList>
<p class="publickey">{props.account}</p>

     </div>
  
           </div>            
        </div>

            
        </div>

    );
};

export default UserHomePage;