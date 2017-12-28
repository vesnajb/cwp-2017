// var dropdown = document.querySelector('.gradovi');
// var temp = document.querySelector('.weather-temp');
// var hum = document.querySelector('.weather-hum');
// var pres = document.querySelector('.weather-pres');

// console.log(dropdown);

// dropdown.addEventListener('change', function(){
// 	console.log('change detected');
// 	console.log(dropdown.value); 
// });

// function getWeather(city){
// 	fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=9b06cf703f7b8c4db6c98a460a487ce2')

// 	.then(function(res){
// 		return res.json();

// 	})

// 	.then(function(res){
// 		console.log(res);
// 		renderData(res);
// });
// }

// function renderData(data){
// 	temp.innerText = data.main.temp;
// 	hum.innerText = data.main.humidity;
// 	pres.innerText = data.main.pressure;
// }

// getWeather('Skopje,mk');

var cb1 = function(fn){
	fn(cb2);
}

var cb2 = function(fn){
	fn(cb3);
}

var cb3 = function(fn){
	fn(cb4);
}

var cb4 = function(fn){
	fn();
	console.log('test');
}

cb1(function(fn){	//daj mi gi site gradovi
	fn(function(fn){	//sega daj mi gi site temperaturi
		fn(function(fn){
			fn(function(){
				console.log('TEST!');
			});
		});
	});
});

//with promises

var pr1 = function(number){
	return new Promise(function(resolve, reject){
		if(number % 2 == 0){
			return resolve(number);
		} else {
			return reject(number);
		}
	
	});
}

// pr1(4)

// .then(function(num){
// 	console.log('success: ' + num);
// },
// 	function(num){
// 		console.log('fail: ' + num);
// 	}
// )
var pr2 = function(br){
	return new Promise(function(resolve, reject){
		return resolve(br * 100);
	});
} 

var pr3 = function(br){
	return new Promise(function(resolve, reject){
		return resolve('Rezultatot e: ' + br);
	});
}

pr1(4)

.then(function(num){
	return pr2(num);
})
.then(function(b){
	return pr3(b);
})
.then(function(b){
	console.log(b);
})