    /*
     * Web 3 credentials and connection
     */
    var web3;
	var account;
	
	window.addEventListener('load', function() {
		var password = "";
		var accounts_index;
		
		if (typeof web3 !== 'undefined') {
			window.web3 = new Web3(web3.currentProvider);
			console.log("yes");
			
		
		
		
		//console.log(version); // 54
		//var account = window.web3.eth.accounts[0];
		//console.log(account);
		//web3.eth.defaultAccount = web3.eth.accounts[0];
		

		
		/*if (typeof account === 'undefined') {
			console.log("bad account");
		}*/
		
		//startApp();
	
		} else {
			// set the provider you want from Web3.providers
			console.log("no");
			//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
		}

})


	function button(){
		var account = web3.eth.accounts[0];
		var accountInterval = setInterval(function() {
		  if (web3.eth.accounts[0] !== account) {
			account = web3.eth.accounts[0];
		  }
		}, 100);
		
		var _numProposals = 1;
		var ballotContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"to","type":"address"}],"name":"delegate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"winningProposal","outputs":[{"name":"winningProposal","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"}],"name":"giveRightToVote","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"proposal","type":"uint8"}],"name":"vote","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_numProposals","type":"uint8"}],"payable":false,"type":"constructor"}]);
		var ballot = ballotContract.vote(
		   _numProposals,
		   {
			 from: account, 
			 data: '0x6060604052341561000c57fe5b60405160208061085b833981016040528080519060200190919050505b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160016000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055508060ff166002816100e591906100ed565b505b50610141565b815481835581811511610114578183600052602060002091820191016101139190610119565b5b505050565b61013e91905b8082111561013a57600060008201600090555060010161011f565b5090565b90565b61070b806101506000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680635c19a95c1461005c578063609ff1bd146100925780639e7b8d61146100be578063b3f98adc146100f4575bfe5b341561006457fe5b610090600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610117565b005b341561009a57fe5b6100a261046f565b604051808260ff1660ff16815260200191505060405180910390f35b34156100c657fe5b6100f2600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104f9565b005b34156100fc57fe5b610115600480803560ff169060200190919050506105f8565b005b60006000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002091508160010160009054906101000a900460ff16156101785761046a565b5b600073ffffffffffffffffffffffffffffffffffffffff16600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156102a657503373ffffffffffffffffffffffffffffffffffffffff16600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b1561031557600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff169250610179565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561034e5761046a565b60018260010160006101000a81548160ff021916908315150217905550828260010160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff161561045257816000015460028260010160019054906101000a900460ff1660ff1681548110151561042e57fe5b906000526020600020900160005b5060000160008282540192505081905550610469565b816000015481600001600082825401925050819055505b5b505050565b60006000600060009150600090505b6002805490508160ff1610156104f3578160028260ff168154811015156104a157fe5b906000526020600020900160005b506000015411156104e55760028160ff168154811015156104cc57fe5b906000526020600020900160005b506000015491508092505b5b808060010191505061047e565b5b505090565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415806105a25750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff165b156105ac576105f5565b6001600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055505b50565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff168061066057506002805490508260ff1610155b1561066a576106db565b60018160010160006101000a81548160ff021916908315150217905550818160010160016101000a81548160ff021916908360ff160217905550806000015460028360ff168154811015156106bb57fe5b906000526020600020900160005b50600001600082825401925050819055505b50505600a165627a7a72305820a7b4a27338b0d7e0632269bd6c19e0f764f685718ffac81e3d2cf54775a4a3590029', 
			 gas: '4700000'
		   }, function (e, contract){
			console.log(e, contract);
			if (typeof contract.address !== 'undefined') {
				 console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
			}
		 })
	}


    /*
    function claimrefund() {

      web3.personal.unlockAccount(addr, password);
      var res = votingAddr.withdrawRefund.call({ from: web3.eth.accounts[accounts_index], gas: 4200000});

      if(res) {
        votingAddr.withdrawRefund.sendTransaction({from: web3.eth.accounts[accounts_index],gas: 4200000});
      }
      return false;
    }

    function unlockAccount() {
       
    }

    // Vote submits their voting key.
    function register() {

        
    }


    // User votes yes or no!
    function vote(choice) {

	}


   
    function checkVoteCast() {

        // Check if key has been submitted
        if (anonymousvotingAddr.registered(addr)) {
            document.getElementById('submitvotingkey').innerHTML = "Voting key has been accepted by Ethereum";
            //Check if vote has already been cast (or if a commitment has been accepted)
            if (anonymousvotingAddr.votecast(addr)) {
                document.getElementById('do_vote').innerHTML = "Vote has been cast";
            } else if (anonymousvotingAddr.commitment(addr) && state != 4) {
                document.getElementById('vote').innerHTML = "You have comitted (but not revealed) your vote";
            }
        }


    }*/

    