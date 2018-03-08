function occur (str, char){
	return str.split("").filter((a) => a === char).length; 
}

let prompt = require('prompt');
prompt.start();
prompt.get(['string', 'char'], function (err, result){
	console.log(occur(result.string, result.char));
})
