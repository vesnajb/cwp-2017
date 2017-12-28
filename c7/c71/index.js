// // var timedata = new Date();
// // console.log(timedata);
// var timenode = document.querySelector('.time');


// setInterval(function(){
// 	var timedate = new Date();
// 	// console.log(timedata);

// 	var hours = timedate.getHours() < 10 ? '0' + timedate.getHours() : timedate.getHours();
// 	var minutes = timedate.getMinutes() < 10 ? '0' + timedate.getMinutes() : timedate.getMinutes();
// 	var seconds = timedate.getSeconds() < 10 ? '0' + timedate.getSeconds() : timedate.getSeconds();

// 	// var output = timedate.getHours() + ':' + timedate.getMinutes() + ':' + timedate.getSeconds();

// 	// timenode.innerText = timedate;
// 	// timenode.innerText = output;
// 	timenode.innerText = hours + ':' + minutes + ':' + seconds;
// },1000);


var newYear = new Date(2018, 0, 1, 0, 0, 0, 0);
console.log(newYear);
console.log(newYear.getTime());

var day = (1000*60*60*24);
var hour = (1000*60*60);
var minute = (1000*60);
var second = 1000;


// console.log(now);
// console.log(now.getTime());



setInterval(function(){

	var now = new Date();
	var razlika = newYear.getTime() - now.getTime();

	var timenode = null;

	var days = (razlika - (razlika % day))/ day;
	var hours = (razlika - (razlika % hour ))/ hour % 24;
	var minutes = (razlika - (razlika % minute ))/ minute % 60;
	var seconds = (razlika - (razlika % second ))/ second % 60;
	
	// console.log(days);
	// console.log(hours);
	// console.log(minutes);
	// console.log(seconds);

	timenode.innerText = days + "денови" + hours + "часови" + minutes + "минути" + seconds + "секунди до Нова Година";
 
})