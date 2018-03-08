function isPalindrome(str){
	// const orig = str;
	let rev = str.split("").reverse().join("");
	return rev === str;
}

function longestPal(str){
	let longest = {};
	longest.l = 0;
	longest.str = "";
	for (let i = 0 ; i < str.length ; i++){
		for (let j = i ; j < str.length ; j++){
			let subStr = str.substring(i,j);
			if (isPalindrome(subStr)){
				if (subStr.length > longest.l){
					longest.l = subStr.length;
					longest.str = subStr;
				}
			}
		}
	}
	return longest.str;
}

let prompt = require('prompt');
prompt.start();
prompt.get(['string'], function (err, result){
	console.log(longestPal(result.string));
})
