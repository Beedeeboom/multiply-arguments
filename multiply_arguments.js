function multipleArguments(...params) {
	if (!params.length) {
		return 0
	} else {
		let sum = 1;
		for(i = 0; i < arguments.length; i++) {
		sum *= arguments[i];
		}
		return sum
	}
}

console.log(multipleArguments(1,2,3,4))
console.log(multipleArguments())

//prints => 24
//prints => 0