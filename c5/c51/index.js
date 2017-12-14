var div1 = document.createElement('div');
var div2 = document.createElement('div');
var body = document.querySelector('body');

div2.innerText = 'Hello World!';
div1.appendChild(div2);

body.appendChild(div1);

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

var list = document.createElement('ul');

var colorChanger = function(e){
	this.classList.remove('green');
	this.classList.remove('red');
	e.preventDefault();

	switch(e.type){
		case 'auxclick':
		this.classList.add('green');
		break;
		case 'click':
		this.classList.add('red');
		break;
	}
}

studenti.forEach(function(v, i){
	var item = document.createElement('li');
	item.innerText = v.ime + ' ' + v.prezime;

	item.addEventListener('click', colorChanger);
	item.addEventListener('auxclick', colorChanger);
	item.addEventListener('contextmenu', colorChanger);

	// item.addEventListener('click', function(){
	// 	// this.remove(); //elementot vrz koj e kliknato
	// 	this.classList.add('red');
	// });
	// item.addEventListener('auxclick', function(){
	// 	this.classList.add('green');
	// });
	// item.addEventListener('contextmenu', function(e){
 //        e.preventDefault();
 	// 	this.classList.remove('green');
		// this.classList.remove('red');
		
		
	list.appendChild(item);
});

body.appendChild(list);


var novoIme = document.querySelector('.ime');
var kopce = document.querySelector('.kopce');

var newName = function(e){
	var item = document.createElement('li');
	item.innerText = novoIme.value;
	list.appendChild(item);
}

kopce.addEventListener('click', newName);

var sliki = [
	{
		title: 'Title 1',
		image: 'img1.jpg'
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
//grid so sliki