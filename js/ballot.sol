pragma solidity ^0.4.11;
// We have to specify what version of compiler this code will compile with

contract Ballot {
  
    struct Voter {
        uint weight;
        bool voted;
    }

    struct Candidate {
        bytes32 name;
    }

    Candidate[] public candidateList;
    mapping(address => Voter) public votersList;
    mapping (bytes32 => uint8) public votesForCandidates;
  
  function Ballot(bytes32[] candidateNames, address[] voterAddresses) {
      for (uint i = 0; i < candidateNames.length; i++) {
          candidateList[i] = Candidate({name: candidateNames[i]});
      }
      
    for (uint j = 0; j < voterAddresses.length; j++) {
        votersList[voterAddresses[j]] = Voter({weight: 1, voted: false});
    }
  }

  function totalVotesFor(bytes32 candidate) returns (uint8) {
    if (validCandidate(candidate) == false) throw;
    return votesForCandidates[candidate];
  }

  function vote(bytes32 candidate) {
    if (votersList[msg.sender].weight != 1 || votersList[msg.sender].voted) return;
    if (validCandidate(candidate) == false) throw;
    votesForCandidates[candidate] += 1;
    votersList[msg.sender].voted = true;
  }

  function validCandidate(bytes32 candidate) returns (bool) {
    for(uint i = 0; i < candidateList.length; i++) {
      if (candidateList[i].name == candidate) {
        return true;
      }
    }
    return false;
  }
  
  function getWinner() returns (bytes32) {
      uint maxVotes = 0;
      bytes32 winner = "";
      
      for (uint i = 0; i < candidateList.length; i++) {
          if (votesForCandidates[candidateList[i].name] > maxVotes) {
              maxVotes = votesForCandidates[candidateList[i].name];
              winner = candidateList[i].name;
          }
      }
      
      return winner;
  }
}
