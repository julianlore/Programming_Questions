function permuteRec(str){
	// Split into char array
	let strA = str.split("");
	return recHelp("", strA);
}

function recHelp(cur, strA){
	ans = [];
	if (strA.length === 0) ans.push(cur); 
	else{
		for (let i = 0 ; i < strA.length ; i++){
			let newStrA = strA.slice(); //Copy the array
			newStrA.splice(i,1);
			ans = ans.concat(recHelp(cur+strA[i], newStrA));
		}
	}
	return ans;
}

function isAnagram(str1, str2){
	return permuteRec(str1).some((a)=>a===str2);
}

let prompt = require('prompt');
prompt.start();
prompt.get(['string1', 'string2'], function (err, result){
	console.log(isAnagram(result.string1, result.string2));
})
