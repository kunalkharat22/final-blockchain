//import { assert } from "console";

var Election =artifacts.require("./Election.sol")

contract("Election",function (accounts) {
    var electionInstance;
    var candidateId;

    it("initializes with 2 candidates",function(){
        return Election.deployed()  
        .then(function(instance){
            return instance.candidatesCount()
        })
        .then((count)=>{
            
            assert.equal(count,2,"candidates are correct")
        })
    })

    it("initializes the candidates with correct values",function(){
        return Election.deployed()  
        .then(function(instance){
            electionInstance=instance
            return electionInstance.candidates(1);
        })
        .then((candidate)=>{
            assert.equal(candidate[1],"Tokyo","contains correct name ")
            assert.equal(candidate[2],0,"contains correct voter count ")
        
            return electionInstance.candidates(2);
        
        })
        .then((candidate)=>{
           assert.equal(candidate[1],"Rio","contains correct name ")
            assert.equal(candidate[2],0,"contains correct voter count ")
        })
    })

    it("adds candidate",async function(){
      return Election.deployed()  
      .then(function(instance){
        electionInstance=instance;
        
        return  electionInstance.addCandidate("John","a","ba",{from:accounts[0]});          
        })
        .then((receipt)=>{
             return electionInstance.candidates(3);       
        })
        .then((candidate)=>{

          assert.equal(candidate[0],3,"candidate id is correct")     
      
      
      })
  })

   //delete candidate 
   it("deletes candidate",async function(){
    return Election.deployed()  
    .then(function(instance){
      electionInstance=instance;
      
      return  electionInstance.deleteCandidate(3,{from:accounts[0]});          
      })
      .then((receipt)=>{
           return electionInstance.candidates(3);       
      })
      .then((candidate)=>{

        assert.equal(candidate[0],0,"candidate is removed")     
    
    
    })
})
   
  //end election
  it("Ends Election",function(){
    return Election.deployed()  
    .then(function(instance){
        electionInstance=instance
        return electionInstance.endElection({from:accounts[0]})
    })
    .then((receipt)=>{
       // end=electionInstance.getEnd()
       // assert.equal(end,true,"Election Ended Successfully")
       return electionInstance.getEnd({from:accounts[0]})
    })
    .then((end)=>{
      
      assert.equal(end,true,"Ended")
  })
})
  
//start election  
it("Starts Election",function(){
  return Election.deployed()  
  .then(function(instance){
      electionInstance=instance
      return electionInstance.startElection({from:accounts[0]})
  })
  .then((receipt)=>{
          return electionInstance.getStart({from:accounts[0]})
  })
  .then((start)=>{
    
    assert.equal(start,true,"Started")
})
})



    it("allows voter to cast a vote",function(){
        return Election.deployed()  
        .then(function(instance){
            electionInstance=instance;
            candidateId=1;
            return electionInstance.vote(candidateId,{from:accounts[0]});
        })
        .then((receipt)=>{
             return electionInstance.voters(accounts[0]);        
        })
        .then((voted)=>{
        assert(voted,"the voter marked as voted")  
        return electionInstance.candidates(candidateId)
        })
        .then((candidate)=>{
            var voteCount=candidate[2]
            assert.equal(voteCount,1,"increments the candidates vote count")  
         })
    })

    it("Checks if double voting is not", function() {
      return Election.deployed()  
        .then(function(instance){
            electionInstance=instance;
            candidateId=1;
            electionInstance.vote(candidateId,{from:accounts[0]});
            return electionInstance.candidates(candidateId);
        })
        .then((candidate)=>{
          var voteCount=candidate[2]
          assert.equal(voteCount,1,"Voted for the 1st time")   
          electionInstance.vote(candidateId,{from:accounts[0]});        
          return electionInstance.candidates(candidateId);
        })
        .then((candidate1)=>{
          var voteCount=candidate1[2]
          assert.equal(voteCount,1,"Double Voting is not allowed")  
        return electionInstance.candidates(candidateId)
        })
        
    })
      


   /*it("throws an exception for double voting", function() {
        return Election.deployed().then(function(instance) {
          electionInstance = instance;
          candidateId = 2;
          electionInstance.vote(candidateId, { from: accounts[0] });
          return electionInstance.candidates(candidateId);
        }).then(function(candidate) {
          var voteCount = candidate[2];
          assert.equal(voteCount, 1, "accepts first vote");
          // Try to vote again
          return electionInstance.vote(candidateId, { from: accounts[0] });
        }).then(assert.fail).catch(function(error) {
          assert(error.message.indexOf('revert') >= 0, "error message must contain revert");
          return electionInstance.candidates(1);
        }).then(function(candidate1) {
          var voteCount = candidate1[2];
          assert.equal(voteCount, 1, "candidate 1 did not receive any votes");
          return electionInstance.candidates(2);
        }).then(function(candidate2) {
          var voteCount = candidate2[2];
          assert.equal(voteCount, 1, "candidate 2 did not receive any votes");
        });
      });
    */
    
    
    
})
