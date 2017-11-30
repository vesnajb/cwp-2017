var niza=['a', 'b', 'c', 'd', 'e'];

console.log(niza);

console.log(niza[2]);

// niza[20] = 'z';
niza.push('z');

console.log(niza[20]);

console.log(niza);

 console.log(niza.length);

var niza2=['vesna', 22356, true, 'test'];
console.log(niza2);

console.log(niza2[1]);

var niza3=[
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 0],
	['a', 
	'b', 
	'c', 
	'd',
	'e', 
	[10, 20, 30, 40]]	
];
console.log(niza3);
console.log(niza3[1][2]);
console.log(niza3[1],niza3[2]);
console.log(niza3[2][5][2]);


var o1 = {
	ime:'Vesna',
	prezime:'Janakievska',
	oceni:[6, 6, 7, 5, 7, 6],
	profesori: [
			{
				ime:'Pero',
				prezime:'Perovski',
			},
			{
				ime:'Janko',
				prezime:'Jankovski'
			}
	]

};

console.log(o1);
console.log(o1['ime']);
console.log(o1['prezime']);

console.log(o1.ime);
console.log(o1.prezime);
console.log(o1.oceni[3]);

console.log(o1.profesori[1].prezime); 


for (var i=0; i < 10; i = i + 1){ // start. end, step
	console.log('Hello!');
	// console.log(i);
}

var niza4 = [20, 30, 40, 50, 60, 70, 80];

// console.log(niza4[0]);
// console.log(niza4[1]);
// console.log(niza4[2]);
// console.log(niza4[3]);
// console.log(niza4[4]);

for(var i=0; i < niza4.length; i++){
	console.log(niza4[i]);
}

var niza5 = [2, 2, 3, 5, 4, 5, 4, 6, 7, 8, 9];

for(var i=0; i < niza5.length; i++){
	// function parni(p){
	// 	var p=niza5[i];
	// 	if (p%2==0) 
	// 		console.log(niza5[i]);
	// };
	// parni(niza[i]);
	if (niza5[i] % 2 == 0){
		console.log(niza5[i]);
	}
}
// niza4.forEach((v) ==> {
// 	console.log(v % 2 == 0 ? v : '');
// });

function testFn(){
	console.log('testFn');
}

function testFn2(){
	return 'testFn2'; //funkcijata ne se pecati
}

testFn();

var tfn2= testFn2();//funkcija sto vraka rezultat
console.log(tfn2);

console.log(testFn2());

var niza6=[2, 5, 3, 2, 3, 3, 5, 1, 1, 4, 4, 2, 4, 2, 2, 4];

sekojTretParenBroj(niza5);
//4, 4 vraka

zbirNaNeparniBroevi(niza5);
// 21

prosek(niza5);
//47 / 16 = 2.9375