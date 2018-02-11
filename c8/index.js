var slides = document.querySelector('.slides');

var  marginPosition = 0;
var images = document.querySelectorAll('.slides img');
var imageWidth = images[0].width;
	
setInterval(function(){
		if (marginPosition > - 1200){
			marginPosition -= 405;
			slides.style.marginTop = marginPosition + 'px';
		}else{
			marginPosition = 0;
			slides.style.marginTop = 0;
		}

	},3000);


var slides2 = document.querySelector('.slides2');

var images = document.querySelectorAll('.slides2 img');
var imageWidth = images[0].width;
var  marginPosition2 = 0;

setInterval(function(){
		if(marginPosition2 > (imageWidth * (images.length - 1) * -1)){
			marginPosition2 = marginPosition2 - imageWidth;
			slides2.style.marginLeft = marginPosition2 + 'px';
		}else{
			marginPosition2 = 0;
			slides2.style.marginLeft = 0;
		}

	},1500);