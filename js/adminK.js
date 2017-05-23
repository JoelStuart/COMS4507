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
		console.log("Connected to MetaMask vK");
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
	var _voterAddr = ["0xF86859AeBa7a19DEE48f115d01d057541fb77fcA"];
	var ballotContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"votersList","outputs":[{"name":"weight","type":"uint256"},{"name":"voted","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getWinner","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"vote","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesForCandidates","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"},{"name":"voterAddresses","type":"address[]"}],"payable":false,"type":"constructor"}]);
	contractObj = ballotContract.at(account);
	//console.log(ballotContract);
	ballotContract.new(
	   _candidateList, _voterAddr,
	   {
		 from: account, 
		 data: '0x6060604052341561000c57fe5b60405161076a38038061076a833981016040528080518201919060200180518201919050505b6000826000908051906020019061004a92919061010d565b50600090505b815181101561010457604060405190810160405280600181526020016000151581525060016000848481518110151561008557fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff0219169083151502179055509050505b8080600101915050610050565b5b505050610185565b82805482825590600052602060002090810192821561014f579160200282015b8281111561014e57825182906000191690559160200191906001019061012d565b5b50905061015c9190610160565b5090565b61018291905b8082111561017e576000816000905550600101610166565b5090565b90565b6105d6806101946000396000f30060606040523615610081576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632f265cf714610083578063392e6678146100c1578063443019fe146100fd5780638e7ea5b214610152578063a69beaba14610180578063b13c744b146101a4578063c68130dc146101e0575bfe5b341561008b57fe5b6100a560048080356000191690602001909190505061021e565b604051808260ff1660ff16815260200191505060405180910390f35b34156100c957fe5b6100e360048080356000191690602001909190505061026c565b604051808215151515815260200191505060405180910390f35b341561010557fe5b610131600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506102d2565b60405180838152602001821515151581526020019250505060405180910390f35b341561015a57fe5b610162610303565b60405180826000191660001916815260200191505060405180910390f35b341561018857fe5b6101a26004808035600019169060200190919050506103fc565b005b34156101ac57fe5b6101c26004808035906020019091905050610565565b60405180826000191660001916815260200191505060405180910390f35b34156101e857fe5b61020260048080356000191690602001909190505061058a565b604051808260ff1660ff16815260200191505060405180910390f35b60006000151561022d8361026c565b1515141561023b5760006000fd5b60026000836000191660001916815260200190815260200160002060009054906101000a900460ff1690505b919050565b60006000600090505b6000805490508110156102c757826000191660008281548110151561029657fe5b906000526020600020900160005b50546000191614156102b957600191506102cc565b5b8080600101915050610275565b600091505b50919050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16905082565b60006000600060006000925060009150600090505b6000805490508110156103f257826002600060008481548110151561033957fe5b906000526020600020900160005b50546000191660001916815260200190815260200160002060009054906101000a900460ff1660ff1611156103e4576002600060008381548110151561038957fe5b906000526020600020900160005b50546000191660001916815260200190815260200160002060009054906101000a900460ff1660ff1692506000818154811015156103d157fe5b906000526020600020900160005b505491505b5b8080600101915050610318565b8193505b50505090565b6001600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015414158061049a5750600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff165b156104a457610562565b600015156104b18261026c565b151514156104bf5760006000fd5b600160026000836000191660001916815260200190815260200160002060008282829054906101000a900460ff160192506101000a81548160ff021916908360ff1602179055506001600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff0219169083151502179055505b50565b60008181548110151561057457fe5b906000526020600020900160005b915090505481565b60026020528060005260406000206000915054906101000a900460ff16815600a165627a7a723058203f56231cc29ef5c449188844a00182c2de838986805fbd8ae7aff35062d840790029', 
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
		var ballotContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"votersList","outputs":[{"name":"weight","type":"uint256"},{"name":"voted","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getWinner","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"vote","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesForCandidates","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"},{"name":"voterAddresses","type":"address[]"}],"payable":false,"type":"constructor"}]);

		//Point at our contract addr
		contractObj = ballotContract.at(addr);
		
		//Call transaction
		var ballot = contractObj.giveRightToVote(
		   _address,
		   {
			 from: account, 
			 data: '0x6060604052341561000c57fe5b60405161076a38038061076a833981016040528080518201919060200180518201919050505b6000826000908051906020019061004a92919061010d565b50600090505b815181101561010457604060405190810160405280600181526020016000151581525060016000848481518110151561008557fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff0219169083151502179055509050505b8080600101915050610050565b5b505050610185565b82805482825590600052602060002090810192821561014f579160200282015b8281111561014e57825182906000191690559160200191906001019061012d565b5b50905061015c9190610160565b5090565b61018291905b8082111561017e576000816000905550600101610166565b5090565b90565b6105d6806101946000396000f30060606040523615610081576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632f265cf714610083578063392e6678146100c1578063443019fe146100fd5780638e7ea5b214610152578063a69beaba14610180578063b13c744b146101a4578063c68130dc146101e0575bfe5b341561008b57fe5b6100a560048080356000191690602001909190505061021e565b604051808260ff1660ff16815260200191505060405180910390f35b34156100c957fe5b6100e360048080356000191690602001909190505061026c565b604051808215151515815260200191505060405180910390f35b341561010557fe5b610131600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506102d2565b60405180838152602001821515151581526020019250505060405180910390f35b341561015a57fe5b610162610303565b60405180826000191660001916815260200191505060405180910390f35b341561018857fe5b6101a26004808035600019169060200190919050506103fc565b005b34156101ac57fe5b6101c26004808035906020019091905050610565565b60405180826000191660001916815260200191505060405180910390f35b34156101e857fe5b61020260048080356000191690602001909190505061058a565b604051808260ff1660ff16815260200191505060405180910390f35b60006000151561022d8361026c565b1515141561023b5760006000fd5b60026000836000191660001916815260200190815260200160002060009054906101000a900460ff1690505b919050565b60006000600090505b6000805490508110156102c757826000191660008281548110151561029657fe5b906000526020600020900160005b50546000191614156102b957600191506102cc565b5b8080600101915050610275565b600091505b50919050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16905082565b60006000600060006000925060009150600090505b6000805490508110156103f257826002600060008481548110151561033957fe5b906000526020600020900160005b50546000191660001916815260200190815260200160002060009054906101000a900460ff1660ff1611156103e4576002600060008381548110151561038957fe5b906000526020600020900160005b50546000191660001916815260200190815260200160002060009054906101000a900460ff1660ff1692506000818154811015156103d157fe5b906000526020600020900160005b505491505b5b8080600101915050610318565b8193505b50505090565b6001600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015414158061049a5750600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff165b156104a457610562565b600015156104b18261026c565b151514156104bf5760006000fd5b600160026000836000191660001916815260200190815260200160002060008282829054906101000a900460ff160192506101000a81548160ff021916908360ff1602179055506001600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff0219169083151502179055505b50565b60008181548110151561057457fe5b906000526020600020900160005b915090505481565b60026020528060005260406000206000915054906101000a900460ff16815600a165627a7a723058203f56231cc29ef5c449188844a00182c2de838986805fbd8ae7aff35062d840790029', 
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
		var ballotContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"votersList","outputs":[{"name":"weight","type":"uint256"},{"name":"voted","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getWinner","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"vote","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesForCandidates","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"},{"name":"voterAddresses","type":"address[]"}],"payable":false,"type":"constructor"}]);

		//Point at our contract addr
		contractObj = ballotContract.at(addr);
		
		
		//Call winning proposal
		res = contractObj.getWinner.call({ from: account, gas: 4200000}, function(e,l){
						if (!e){
							console.log(parseInt(l));
							_error.innerHTML = "Winning proposal is " + hex2S(l);
						}
					 });
		
		
	} else {
			var _error = document.getElementById('winnerErrorText');
			 _error.innerHTML = "Contract address not set. Please set before continuing.";
	}
	//var ballot = ballotContract.giveRightToVote();
	

}

function hex2S(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        var v = parseInt(hex.substr(i, 2), 16);
        if (v) str += String.fromCharCode(v);
    }
    return str;
}  