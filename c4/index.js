// var niza1=[1, 3, 3, 5, 7, 8, 15];
// var niza2=[4, 5, 25, 15, 7, 6, 30, 45];

// function newarray(niza){
// 	var nniza=[];
// 	var clen="";
// 	for(var i=0; i<niza.length; i++){
// 		if(niza[i] % 3 == 0){
// 			if(niza[i] % 5 == 0){
// 				niza[i]="fizzbuzz";
// 			}
// 			else{
// 				niza[i]="fizz";}
// 		}
// 		else if(niza[i] % 5 == 0){
// 			niza[i]="buzz";
// 		}
// 		clen += niza[i];
// 		nniza.push(clen);
// 		// console.log(nniza);
// 		// console.log(niza[i]);
// 	}
// 	return nniza;
// }
// console.log(newarray(niza1));
function fn1(){
	console.log("Zdravo!");
}



var fn2 = function(){

};

var fnOne = function(){
	console.log('fnOne');
};

var fnTwo = function(fn){
	fn();
};
fnTwo(fnOne);

fnTwo(function(){
	console.log('Some anon function');
});

// setTimeout(function(){
// 	console.log('Timed out!');
// }, 1);

// console.log('After time out');

// for(var i=0; i<1000; i++){
// 	console.log('Line:'+ i);
// }

var math = {
	a: null,
	b: null,

	add: function(){
		return this.a + this.b;
	},

	sub: function(){
		return this.a - this.b;
	},

	div: function(){
		return this.a / this.b;
	},

	mul: function(){
		return this.a * this.b;
	}
};

math.a = 4;
math.b = 9;

console.log(math.add());
console.log(math.sub());
console.log(math.div());
console.log(math.mul());

math.a = 14;
math.b = 92;

console.log(math.add());
console.log(math.sub());
console.log(math.div());
console.log(math.mul());


var fnTest1 = function(name){
	console.log(name);
}

var fnTest2 = function(fn,n){
	fn(n);
}

var fnTest3 = function(fn1, fn2, name){
	fn1(fn2, name);
}
fnTest3(fnTest2, fnTest1, "Pero");//verzija1

fnTest3(function(fn, n){fn(n)}, fnTest1, "Janko")//verzija2

fnTest3(function(fn, n){fn(n)}, function(name){console.log(name)}, "Stanko");//verzija3


//domasna <a href="http://google.com">Google</a>
// so pomos na java ako se klika na linkot da ne me odnese na google da me odnese na yahoo anonimna funkcija 
//dom events, addEventListener, querySelector


//da ima 3 input polinja <input type="number" name="a" value="0">
//<input type="number" name="b" value="0">
//<input type="number" name="a+b da dade vo rezultat">
//dom events da se slucuva vo zivo, stavanje vrednost da piseme formular