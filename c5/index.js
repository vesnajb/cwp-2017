var link = document.querySelector('.google-link');

// link.addEventListener('click', function(e){
// 	e.preventDefault();
// 	console.log(e);
// 	window.location = "https://yahoo.com";
// })

// var clickHandler = function(e){
// 	e.preventDefault();
// 	console.log(e);
// 	// window.location = "https://yahoo.com";
// 	window.open("https://yahoo.com", "_blank");
// }

var clickHandler = function(e){
	e.preventDefault();
	console.log(e);

	switch(e.type){
		case 'click':
		window.location = "https://yahoo.com";
		break;
		case 'auxclick':
		window.open("https://yahoo.com", "_blank");
		break;
	}
}

link.addEventListener('click', clickHandler);
link.addEventListener('auxclick', clickHandler);