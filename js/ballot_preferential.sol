pragma solidity ^0.4.6;
// We have to specify what version of compiler this code will compile with

contract BallotPreferential {
  
    struct Voter {
        uint weight;
        bool voted;
    }

    bytes32[] public candidateList;
    mapping(address => Voter) public votersList;
    mapping (bytes32 => uint8) public votesForCandidates;
    mapping (bytes32 => bytes32[]) public secondPreferences;
    uint public totalVotes;
    bytes32[] private tmpCandidateList;

  function BallotPreferential() {
      totalVotes = 0;
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

  function vote(bytes32 firstPreference, bytes32 secondPreference) {
    if (votersList[msg.sender].weight != 1 || votersList[msg.sender].voted) return;
    if (validCandidate(firstPreference) == false || validCandidate(secondPreference) == false) throw;
    totalVotes += 1;
    votersList[msg.sender].voted = true;
    votesForCandidates[firstPreference] += 1;
    secondPreferences[firstPreference].push(secondPreference);
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
  
  //Only use at the end of the election!! 
  function getWinner() returns (bytes32) {
      uint maxVotes = 0;
      bytes32 winner = "";
      
      while (true) {
        for (uint i = 0; i < candidateList.length; i++) {
            if (votesForCandidates[candidateList[i]] > maxVotes) {
                maxVotes = votesForCandidates[candidateList[i]];
                winner = candidateList[i];
            }
        }
      
        if (maxVotes > (totalVotes/2) || candidateList.length == 2) {
            return winner;
        }
        
        bytes32 loser = getLastCandidate();
        removeCandidate(loser);
      
        for (uint j = 0; j < secondPreferences[loser].length; j++) {
            if (validCandidate(secondPreferences[loser][j])) {
                votesForCandidates[secondPreferences[loser][j]] += 1;
            } else {
                votesForCandidates[secondPreferences[loser][j]] = 0;
            }
        }
      }
  }
  
  function removeCandidate(bytes32 loser) {
      tmpCandidateList = new bytes32[](candidateList.length-1);
      for (uint i = 0; i < candidateList.length; i++) {
          if (candidateList[i] != loser) {
              tmpCandidateList.push(candidateList[i]);
          }
      }
      votesForCandidates[loser] = 0;
      candidateList = tmpCandidateList;
  }
  
    function getLastCandidate() returns (bytes32) {
    if (candidateList.length == 0) return "";
    if (candidateList.length == 1) return candidateList[0];
    
    uint leastVotes = votesForCandidates[candidateList[0]];
    bytes32 loser = candidateList[0];
      
    for (uint i = 0; i < candidateList.length; i++) {
          if (votesForCandidates[candidateList[i]] < leastVotes) {
              leastVotes = votesForCandidates[candidateList[i]];
              loser = candidateList[i];
          }
      }
      return loser;
  }
  
  function notIn(bytes32[] excludeList, bytes32 candidateName) returns (bool) {
      for (uint i = 0; i < excludeList.length; i++) {
          if (excludeList[i] == candidateName) {
              return false;
          }
      }
      return true;
  }
}