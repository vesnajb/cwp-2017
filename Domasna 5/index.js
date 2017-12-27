var button = document.querySelector(".res");

button.addEventListener('click', function(v){

	var city = document.querySelector('.city').value;
	console.log(this);

	fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=9b06cf703f7b8c4db6c98a460a487ce2' + '&units=metric')

	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data);

		var temp = document.querySelector('.temp');
		var min = document.querySelector('.min');
		var max = document.querySelector('.max');
		var press = document.querySelector('.press');
		var hum = document.querySelector('.hum');
		var weath = document.querySelector('.weath');
		var wind = document.querySelector('.wind');

		temp.innerText = data.main.temp + ' C';
		min.innerText = data.main.temp_min + ' C';
		max.innerText = data.main.temp_max + ' C';
		press.innerText = data.main.pressure + ' hpa';
		hum.innerText = data.main.humidity + ' %';
		weath.innerText = data.weather[0].main + ", " + data.weather[0].description;
		wind.innerText = data.wind.speed + ' m/s';

	});
});