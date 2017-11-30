var niza = [2, 5, 3, 2, 3, 3, 5, 1, 1, 4, 4, 2, 4, 2, 2, 4];
var b=0;
function sekojTretParenBroj(n){
	for(var i=0; i< niza.length; i++){
		n=niza[i];
		if (n%2==0) {
				b=b+1;
				if (b==3){ 
					console.log(niza[i]);
					b=0;
				};
		}
	}
}
sekojTretParenBroj(niza);


var niza2 = [5, 7, 13, 4, 8, 14, 13, 25, 11, 16, 42, 9, 12, 44, 26, 22, 34];
function sekojTretParenBroj2(n){
	for(var i=0; i< niza2.length; i++){
		n=niza2[i];
		if (n%2==0) {
				b=b+1;
				if (b==3){ 
					console.log(niza2[i]);
					b=0;
				};
		}
	}
}
sekojTretParenBroj2(niza2);



var niza = [2, 5, 3, 2, 3, 3, 5, 1, 1, 4, 4, 2, 4, 2, 2, 4];
var sum=0;
function zbirNaNeparniBroevi(m){
	for(var i=0; i< niza.length; i++){
		m=niza[i];
		if (m%2==1) {
			sum=sum+niza[i];
		};
};
return "sum";
}
zbirNaNeparniBroevi(niza);
console.log(sum);


var p=0;
function prosek(l){
	for(var i=0; i<niza.length; i++){
		l=niza[i];
		p=p+l;
	};
	p=p/16;
	return 'p';
}
prosek(niza);
console.log(p);



// zbirNaNeparniBroevi(niza5);
// // 21

// prosek(niza5);
// //47 / 16 = 2.9375

