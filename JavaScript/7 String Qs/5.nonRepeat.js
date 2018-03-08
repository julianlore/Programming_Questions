function nonRepeat(str){
	if (str.length === 0) console.log('Error, empty string');
	else if (str.length === 1) return str[0];
	else{
		if (str[0] !== str[1]) return str[0];
		else{
			for (let i = 1 ; i < str.length ; i++){
				if (str[i] !== str[i-1]) return str[i];
			}
			console.log('String consists of only 1 char.');
		}
	}
}

let prompt = require('prompt');
prompt.start();
prompt.get(['string'], function (err, result){
	console.log(nonRepeat(result.string));
})
