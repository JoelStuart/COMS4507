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
  
  function Ballot() {
  }
  
  function addCandidate(bytes32 candidate) {
      candidateList.push(candidate);
  }
  
  function addVoter(address voter) {
      votersList[voter] = Voter({weight: 1, voted: false});
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
      if (candidateList[i] == candidate) {
        return true;
      }
    }
    return false;
  }
  
  function getWinner() returns (bytes32) {
      uint maxVotes = 0;
      bytes32 winner = "";
      
      for (uint i = 0; i < candidateList.length; i++) {
          if (votesForCandidates[candidateList[i]] > maxVotes) {
              maxVotes = votesForCandidates[candidateList[i]];
              winner = candidateList[i];
          }
      }
      
      return winner;
  }
}