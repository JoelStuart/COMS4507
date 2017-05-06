    /*
     * Web 3 credentials and connection
     */
    
	
	window.addEventListener('load', function() {
		var password = "";
		var accounts_index;
		if (typeof web3 !== 'undefined') {
			//web3 = new Web3(web3.currentProvider);
			document.write("yes");
		} else {
			// set the provider you want from Web3.providers
			document.write("no");
			//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
		}

})

	//Contracts here

    
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


    }

    