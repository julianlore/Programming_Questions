function removeChar(chr, str){
	return str.split("").filter((a)=>a!==chr).join("");
}

let prompt = require('prompt');
prompt.start();
prompt.get(['char','string'], function (err, result){
	console.log(removechar(result.char, result.string));
})
