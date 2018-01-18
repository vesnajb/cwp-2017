var slides = document.querySelector('.slides');

var  marginPosition = 0;
	

	// for(i=0; i<img.length; i++){
	// 	mar = mar-100%	 
	// 	setTimeout(img, 3000);
	// 	};

	setInterval(function(){
		if (marginPosition > - 1200){
			marginPosition -= 405;
			slides.style.marginTop = marginPosition + 'px';
		}else{
			marginPosition = 0;
			slides.style.marginTop = 0;
		}

	},1500);


var slides2 = document.querySelector('.slides2');

var  marginPosition2 = 0;

setInterval(function(){
		if (marginPosition2 > - 2400){
			marginPosition2 = marginPosition2 - 600;
			slides2.style.marginLeft = marginPosition2 + 'px';
		}else{
			marginPosition2 = 0;
			slides2.style.marginLeft = 0;
		}

	},1500);