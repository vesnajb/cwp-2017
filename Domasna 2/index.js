var niza1 = [2, 5, 3, 2, 3, 3, 5, 1, 1, 4, 4, 2, 4, 2, 2, 4];
var niza2 = [5, 7, 13, 4, 8, 14, 13, 25, 11, 16, 42, 9, 12, 44, 26, 22, 34];
var niza3 = [3, 8, 6, 92, 34, 51, 36, 13, 17, 14, 11, 24, 57, 58,102, 108];

function sekojTretParenBroj(niza){
	var b = 0;
	for(var i = 0; i < niza.length; i++){
		if (niza[i] % 2 == 0) {
			b = b + 1;
			if (b == 3){ 
				console.log(niza[i]);
				b = 0;
			};
		}
	}
}

sekojTretParenBroj(niza1);
sekojTretParenBroj(niza2);
sekojTretParenBroj(niza3);


function zbirNaNeparniBroevi(niza){
	var sum = 0;
	for(var i = 0; i < niza.length; i++){
		if (niza[i] % 2 == 1) {
			// sum = sum + niza[i];
			sum += niza[i];
		}
	}

	return sum;
}

console.log(zbirNaNeparniBroevi(niza1));

console.log(zbirNaNeparniBroevi(niza2));

console.log(zbirNaNeparniBroevi(niza3));




function prosek(niza){
	var p = 0;
	for(var i = 0; i < niza.length; i++){
		p = p + niza[i];
	}

	p = p / niza.length;
	return p;
}

console.log(prosek(niza1));

console.log(prosek(niza2));

console.log(prosek(niza3));
