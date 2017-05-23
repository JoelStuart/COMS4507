var web3;
var account;
var ballotContract;
var contractInst;
var contractObj;
var res = -1;
var addr;


window.addEventListener('load', function() {
		
	if (typeof web3 !== 'undefined') {
		window.web3 = new Web3(web3.currentProvider);
		console.log("Connected to MetaMask");
	} else {
		// set the provider you want from Web3.providers
		console.log("MetaMask not Connected");
		//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	}

})

/**Creates a new ballot contract. Contract address is needed for all other transactions.
*
*/
function createBallot(){
	var account = web3.eth.accounts[0];
		var accountInterval = setInterval(function() {
		  if (web3.eth.accounts[0] !== account) {
			account = web3.eth.accounts[0];
		  }
		}, 100);
	var _candidateList = ["Johno", "Stevo", "Damo"];
	var _voterAddr = ["0x68a6EA44f86b4F96a177aeeAC706a3E0b4a779b5"];
	var ballotContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"votersList","outputs":[{"name":"weight","type":"uint256"},{"name":"voted","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getWinner","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"vote","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"name","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesForCandidates","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"},{"name":"voterAddresses","type":"address[]"}],"payable":false,"type":"constructor"}]);
	contractObj = ballotContract.at(account);
	//console.log(ballotContract);
	ballotContract.new(
	   _candidateList, _voterAddr,
	   {
		 from: account, 
		 data: '0x6060604052341561000c57fe5b604051610764380380610764833981016040528080518201919060200180518201919050505b60006000600091505b83518210156100ae57602060405190810160405280858481518110151561005e57fe5b906020019060200201516000191681525060008381548110151561007e57fe5b906000526020600020900160005b50600082015181600001906000191690559050505b818060010192505061003b565b600090505b82518110156101675760406040519081016040528060018152602001600015158152506001600085848151811015156100e857fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff0219169083151502179055509050505b80806001019150506100b3565b5b505050505b6105e88061017c6000396000f30060606040523615610081576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632f265cf714610083578063392e6678146100c1578063443019fe146100fd5780638e7ea5b214610152578063a69beaba14610180578063b13c744b146101a4578063c68130dc146101e0575bfe5b341561008b57fe5b6100a560048080356000191690602001909190505061021e565b604051808260ff1660ff16815260200191505060405180910390f35b34156100c957fe5b6100e360048080356000191690602001909190505061026c565b604051808215151515815260200191505060405180910390f35b341561010557fe5b610131600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506102d5565b60405180838152602001821515151581526020019250505060405180910390f35b341561015a57fe5b610162610306565b60405180826000191660001916815260200191505060405180910390f35b341561018857fe5b6101a2600480803560001916906020019091905050610408565b005b34156101ac57fe5b6101c26004808035906020019091905050610571565b60405180826000191660001916815260200191505060405180910390f35b34156101e857fe5b61020260048080356000191690602001909190505061059c565b604051808260ff1660ff16815260200191505060405180910390f35b60006000151561022d8361026c565b1515141561023b5760006000fd5b60026000836000191660001916815260200190815260200160002060009054906101000a900460ff1690505b919050565b60006000600090505b6000805490508110156102ca57826000191660008281548110151561029657fe5b906000526020600020900160005b50600001546000191614156102bc57600191506102cf565b5b8080600101915050610275565b600091505b50919050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16905082565b60006000600060006000925060009150600090505b6000805490508110156103fe57826002600060008481548110151561033c57fe5b906000526020600020900160005b50600001546000191660001916815260200190815260200160002060009054906101000a900460ff1660ff1611156103f0576002600060008381548110151561038f57fe5b906000526020600020900160005b50600001546000191660001916815260200190815260200160002060009054906101000a900460ff1660ff1692506000818154811015156103da57fe5b906000526020600020900160005b506000015491505b5b808060010191505061031b565b8193505b50505090565b6001600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541415806104a65750600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff165b156104b05761056e565b600015156104bd8261026c565b151514156104cb5760006000fd5b600160026000836000191660001916815260200190815260200160002060008282829054906101000a900460ff160192506101000a81548160ff021916908360ff1602179055506001600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff0219169083151502179055505b50565b60008181548110151561058057fe5b906000526020600020900160005b915090508060000154905081565b60026020528060005260406000206000915054906101000a900460ff16815600a165627a7a723058203f015450551f77e257deab28859fb37cac92ad0bb31ca082fab57ff0980c15a80029', 
		 gas: '4700000'
	   }, function (e, contract){
		   if (typeof contract.address !== 'undefined') {
				 addr = contract.address;
				 contractInst = contract;
				 document.getElementById('contactAddress').value = addr;
				 var _para = document.getElementById('contractStatusText');
				_para.innerHTML = "Contract Address Set.";
		    }
		
	 });

}

/**Called from update contract addr button
*/
function updateAddr(){
	var _contractAddress = document.getElementById('contactAddress').value;
	addr = _contractAddress;
	var _para = document.getElementById('contractStatusText');
	_para.innerHTML = "Contract Address Set.";
}

/**Called from give vote button
*/
function giveVote(){
	//If contract addr set
	if (typeof addr !== 'undefined') {
		//Set front end error text to empty
		var _error = document.getElementById('giveErrorText');
		 _error.innerHTML = "";
		var _address = document.getElementById('address').value;
		console.log(_address);
		
		//Make sure the user remains logged in
		var account = web3.eth.accounts[0];
			var accountInterval = setInterval(function() {
			  if (web3.eth.accounts[0] !== account) {
				account = web3.eth.accounts[0];
			  }
			}, 100);
			
		//Our contract ABI
		var ballotContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"to","type":"address"}],"name":"delegate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"winningProposal","outputs":[{"name":"winningProposal","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"}],"name":"giveRightToVote","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"proposal","type":"uint8"}],"name":"vote","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_numProposals","type":"uint8"}],"payable":false,"type":"constructor"}]);
		
		//Point at our contract addr
		contractObj = ballotContract.at(addr);
		
		//Call transaction
		var ballot = contractObj.giveRightToVote(
		   _address,
		   {
			 from: account, 
			 data: '0x6060604052341561000c57fe5b60405160208061085b833981016040528080519060200190919050505b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160016000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055508060ff166002816100e591906100ed565b505b50610141565b815481835581811511610114578183600052602060002091820191016101139190610119565b5b505050565b61013e91905b8082111561013a57600060008201600090555060010161011f565b5090565b90565b61070b806101506000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680635c19a95c1461005c578063609ff1bd146100925780639e7b8d61146100be578063b3f98adc146100f4575bfe5b341561006457fe5b610090600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610117565b005b341561009a57fe5b6100a261046f565b604051808260ff1660ff16815260200191505060405180910390f35b34156100c657fe5b6100f2600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104f9565b005b34156100fc57fe5b610115600480803560ff169060200190919050506105f8565b005b60006000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002091508160010160009054906101000a900460ff16156101785761046a565b5b600073ffffffffffffffffffffffffffffffffffffffff16600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156102a657503373ffffffffffffffffffffffffffffffffffffffff16600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b1561031557600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff169250610179565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561034e5761046a565b60018260010160006101000a81548160ff021916908315150217905550828260010160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff161561045257816000015460028260010160019054906101000a900460ff1660ff1681548110151561042e57fe5b906000526020600020900160005b5060000160008282540192505081905550610469565b816000015481600001600082825401925050819055505b5b505050565b60006000600060009150600090505b6002805490508160ff1610156104f3578160028260ff168154811015156104a157fe5b906000526020600020900160005b506000015411156104e55760028160ff168154811015156104cc57fe5b906000526020600020900160005b506000015491508092505b5b808060010191505061047e565b5b505090565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415806105a25750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff165b156105ac576105f5565b6001600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055505b50565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff168061066057506002805490508260ff1610155b1561066a576106db565b60018160010160006101000a81548160ff021916908315150217905550818160010160016101000a81548160ff021916908360ff160217905550806000015460028360ff168154811015156106bb57fe5b906000526020600020900160005b50600001600082825401925050819055505b50505600a165627a7a72305820a7b4a27338b0d7e0632269bd6c19e0f764f685718ffac81e3d2cf54775a4a3590029', 
			 gas: '4700000'
		   }, function (e, contract){
			   if (e){
				   console.log(e);
				   _error.innerHTML = e;
			   }
				else {
					 console.log("Contract mined. Vote given.");
					 //Front end code
					 var _addresses = document.getElementById('addresses');
					 var addVals = _addresses.value;
					 var tempVal = addVals.concat(_address);
					 var newVals = tempVal.concat("\n");
					 _addresses.value = newVals;
			   }
		 });
		 
	} else {
		//Update front end
		var _error = document.getElementById('giveErrorText');
		 _error.innerHTML = "Contract address not set. Please set before continuing.";
	}
	

}

function getWinner(){
	//If contract addr set
	if (typeof addr !== 'undefined') {
		//Set front end error text to empty
		var _error = document.getElementById('winnerErrorText');
		 _error.innerHTML = "";
		 
		//Keep user logged in
		var account = web3.eth.accounts[0];
		var accountInterval = setInterval(function() {
		  if (web3.eth.accounts[0] !== account) {
			account = web3.eth.accounts[0];
		  }
		}, 100); 
		 
		//Our contract ABI
		var ballotContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"votersList","outputs":[{"name":"weight","type":"uint256"},{"name":"voted","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getWinner","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"vote","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"name","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesForCandidates","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"},{"name":"voterAddresses","type":"address[]"}],"payable":false,"type":"constructor"}]);
	
		//Point at our contract addr
		contractObj = ballotContract.at(addr);
		
		
		//Call winning proposal
		res = contractObj.getWinner.call({ from: account, gas: 4200000}, function(e,l){
						if (!e){
							console.log(parseInt(l));
							_error.innerHTML = "Winning proposal is " + String(l);
						}
					 });
		
		
	} else {
			var _error = document.getElementById('winnerErrorText');
			 _error.innerHTML = "Contract address not set. Please set before continuing.";
	}
	//var ballot = ballotContract.giveRightToVote();
	

}