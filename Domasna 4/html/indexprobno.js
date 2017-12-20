var div1 = document.createElement('div1');
var div2 = document.createElement('div');
var div3 = document.createElement('div');
var div4 = document.createElement('div');
var div5 = document.createElement('div');
var div6 = document.createElement('div');
var div7 = document.createElement('div');
var div8 = document.createElement('div');
var div9 = document.createElement('div');
var div10 = document.createElement('div');

var body = document.querySelector('body');


div2.innerText = 'Title 1';
div1.appendChild(div2);

div3.innerText = 'Title 2';
div1.appendChild(div3);

div4.innerText = 'Title 3';
div1.appendChild(div4);

div5.innerText = 'Title 4';
div1.appendChild(div5);

div6.innerText = 'Title 5';
div1.appendChild(div6);

div7.innerText = 'Title 6';
div1.appendChild(div7);

div8.innerText = 'Title 7';
div1.appendChild(div8);

div9.innerText = 'Title 8';
div1.appendChild(div9);

div10.innerText = 'Title 9';
div1.appendChild(div10);

body.appendChild(div1);


var img = document.createElement("img");
img.src = "cat.jpg";

var src = document.getElementById("body");
div1.appendChild(img);





var sliki = [
	{
		title: 'Title 1',
		image: 'cat.jpg'
	},
	{
		title: 'Title 2',
		image: 'img2.jpg'
	},
	{
		title: 'Title 3',
		image: 'img3.jpg'
	},
	{
		title: 'Title 4',
		image: 'img4.jpg'
	},
	{
		title: 'Title 5',
		image: 'img5.jpg'
	},
	{
		title: 'Title 6',
		image: 'img6.jpg'
	},
];

var list = document.createElement('ul');

// var openPic = function(e){

// }

// var img = document.createElement("img");
 
// img.src = "cat.jpg";
// var src = document.getElementById("x");
 
// src.appendChild(div2);


// var list = document.createElement('ul');

// studenti.forEach(function(v, i){
// 	var item = document.createElement('li');
// 	item.innerText = v.ime + ' ' + v.prezime;

// 	item.addEventListener('click', colorChanger);
// 	item.addEventListener('auxclick', colorChanger);
// 	item.addEventListener('contextmenu', colorChanger);
// };


var studenti = [
	{
		ime: 'Pero',
		prezime: 'Perovski',
	},
	{
		ime: 'Janko',
		prezime: 'Jankovski',
	},
	{
		ime: 'Stanko',
		prezime: 'Stankovski',
	},
	{
		ime: 'Mile',
		prezime: 'Milevski',
	},	
];