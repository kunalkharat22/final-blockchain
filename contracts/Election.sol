pragma solidity ^0.8.13;


contract Election {
    // Model a Candidate
    struct Candidate {
       uint id;
        string name;
        uint voteCount;
        string party;
        string qualification;
    }

    event votedEvent (
        uint indexed _candidateId
    );
    event AddedEvent (
        uint indexed _candidateId
    );

modifier onlyAdmin() {
   require(msg.sender == owner);
   _;
}   
    uint public candidateCount;
    address public owner;
    uint voterCount;
    bool start;
    bool end;
   

    // Store accounts that have voted
    mapping(address => bool) public voters;
    // Read/write candidates
    mapping(uint => Candidate) public candidates;
    // Store Candidates Count
    uint public candidatesCount;

      constructor () public {  
        owner = msg.sender;
        candidateCount = 0;
        start = true;
        end = false;      

        addCandidate("Tokyo","BJP","B.E") ;
        addCandidate("Rio","Congress","b.a") ;
    }

    function addCandidate(string memory _name,string memory _party,string memory qualification) public onlyAdmin
     {
        candidatesCount ++;
        candidates[candidatesCount]=Candidate(candidatesCount,_name,0,_party,qualification);
         emit AddedEvent(candidatesCount);
     
    }

    function vote (uint _candidateId) public {
        // require that they haven't voted before
        require(!voters[msg.sender],"User Already Voted");

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote Count
        candidates[_candidateId].voteCount ++;
           emit votedEvent(_candidateId);
    }
    
function getOwner() public view returns (address) {
   return owner;
}

function startElection() public onlyAdmin {
   start = true;
   end = false;
}
function endElection() public onlyAdmin {
   end = true;
   start = false;
}

function getStart() public view returns (bool) {
   return start;
}
function getEnd() public view returns (bool) {
   return end;
}

}