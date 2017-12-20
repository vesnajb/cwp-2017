var body = document.querySelector('body');

var sliki = [
	{
		title: 'Title 1',
		image: 'img1.jpg',
	},
	{
		title: 'Title 2',
		image: 'img2.jpg',
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
		image: "img5.jpg"
	},
	{
		title: 'Title 6',
		image: 'img6.jpg'
	},
	{
		title: 'Title 7',
		image: 'img7.jpg'
	},
	{
		title: 'Title 8',
		image: 'img8.jpg'
	},
	{
		title: 'Title 9',
		image: 'img9.jpg'
	},
];

var ul = document.createElement('ul');

sliki.forEach(function(i){

	var icon = document.createElement("i");
	icon.setAttribute("class","fa fa-times-circle-o");

	var img = document.createElement('img');
	img.setAttribute("src", i.image );
	
	var h3 = document.createElement('H3');
	h3.innerText = i.title;
	
	var li = document.createElement('li');
	li.appendChild(icon);
	li.appendChild(img);
	li.appendChild(h3);

	ul.appendChild(li);

	body.appendChild(ul);

li.addEventListener('click', function(){
	this.classList.add('transform');
});

	
});

