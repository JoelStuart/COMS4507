pragma solidity ^0.4.6;
// We have to specify what version of compiler this code will compile with

contract Ballot {
  
    struct Voter {
        uint weight;
        bool voted;
    }

    bytes32[] public candidateList;
    mapping(address => Voter) public votersList;
    mapping (bytes32 => uint8) public votesForCandidates;
    bytes32[] private winners;
    bytes32[] private allWinners;
    //phase 0: registration. phase 1: voting. phase 2: post election
    uint8 private phase;
  
  function Ballot() {
      phase = 0;
  }
  
  function addCandidate(bytes32 candidate) {
      if (phase == 0) {
        candidateList.push(candidate);
      }
  }
  
  function startVoting() {
      phase = 1;
  }
  
  function finishVoting() {
      phase = 2;
  }
  
  function getPhase() returns (uint8) {
      return phase;
  }
  
  function addVoter(address voter) {
      if (phase == 0) {
        votersList[voter] = Voter({weight: 1, voted: false});
      }
  }

  function totalVotesFor(bytes32 candidate) returns (uint8) {
    if (validCandidate(candidate) == false) throw;
    return votesForCandidates[candidate];
  }

  function vote(bytes32 candidate) {
    if (phase == 1) {
        if (votersList[msg.sender].weight != 1 || votersList[msg.sender].voted) return;
        if (validCandidate(candidate) == false) throw;
        votesForCandidates[candidate] += 1;
        votersList[msg.sender].voted = true;
    }
  }

  function validCandidate(bytes32 candidate) returns (bool) {
    for(uint i = 0; i < candidateList.length; i++) {
      if (candidateList[i] == candidate) {
        return true;
      }
    }
    return false;
  }
  
  function getWinner() returns (bytes32[]) {
      if (phase == 2) {
        uint maxVotes = 0;
        for (uint i = 0; i < candidateList.length; i++) {
            if (votesForCandidates[candidateList[i]] == maxVotes) {
                allWinners.push(candidateList[i]);
            } else if (votesForCandidates[candidateList[i]] > maxVotes) {
                allWinners = new bytes32[](0);
                maxVotes = votesForCandidates[candidateList[i]];
                allWinners.push(candidateList[i]);
            }
        }
      
        for (uint j = 0; j < allWinners.length; j++) {
            if (allWinners[j] != "") {
                winners.push(allWinners[j]);
            } 
        }
      
        return winners;
      } 
  }
}