
var a = document.querySelector('.a');
var b = document.querySelector('.b');
var res = document.querySelector('.res');
var win = document.querySelector('.win');

var addition = function(){
	res.value = parseInt(a.value) + parseInt(b.value);
	
	if (res.value == 1000){
		win.style.display = 'block';
	} else {
		win.style.display = 'none';
	}
}


a.addEventListener('change', addition);
a.addEventListener('keyup', addition);
b.addEventListener('change', addition);
b.addEventListener('keyup', addition);