/*!
 * random-encode <https://github.com/Upasana242/random-encode.git>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function randomEncode(str) {
	//let str be 'Snape is working for Dumbledore.'
	const arr = str.split(' ') //This will store ['Snape','is','working'...]
	let keyArr = [];
	//this will iterate over the different words, first time over 'Snape'
	for (let i = 0; i < arr.length; i++){
		let x = Math.floor(Math.random()*100)%26 //this generates say 4
		keyArr.push(x)	//we get an array [4,...] which the one who applies this has to separately transmit to the receiver which is neccessary and unique] 
		arr[i] = shift(arr[i],x)	//This will shift every character of Snape 4 times right
	}
	return {	
		encodedString: arr.join(' '),	//according to the below key this is 'Wreti nx xpsljoh...'
		key: keyArr		//say [4,5,1...]
	}
}

	const shift = (string,shifter) => {
		let str = ''
		for (let i = 0; i < string.length; i++){	//this will iterate through 'S','n','a' etc
			let c = string.charAt(i)
			for (let j = 0; j <= shifter-1; j++){		//this will cause the shift four times for S i.e though T,U,V to W.
				c = shiftRight(c)	//this will just return 't' for 's'
			}
			str+=c
		}
		return str
	}

	function shiftRight(char){
	const alphabets = 'abcdefghijklmnopqrstuvwxyz'
	const alphaBets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
		if (alphabets.indexOf(char) != -1)
			return char === 'z' ? 'a' : alphabets.charAt(alphabets.indexOf(char)+1)
		else if (alphaBets.indexOf(char) != -1)
			return char === 'Z' ? 'A' : alphaBets.charAt(alphaBets.indexOf(char)+1)
		else return char
	}
