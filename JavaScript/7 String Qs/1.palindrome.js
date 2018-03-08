let prompt = require('prompt');

function isPalindrome(str){
	// const orig = str;
	let rev = str.split("").reverse().join("");
	return rev === str;
}
prompt.start();
prompt.get('string', function (err, result){
	console.log(isPalindrome(result.string));
})

