var slides = document.querySelector('.slides');

var marginPosition = 0;

setInterval(function(){
	if(marginPosition > - 1200){
		marginPosition -= 405;
		slides.style.marginTop = marginPosition + 'px';
	}else{
		marginPosition = 0;
		slides.style.marginTop = 0;
	}	
	
},3000);