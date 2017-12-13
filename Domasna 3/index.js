document.getElementById("myLink").addEventListener("click", yahoo);

function yahoo(){
	this.href = "https://www.yahoo.com/";
}


function addNumbers(){
	var n1 = parseInt(document.getElementById("n1").value);
	var n2 = parseInt(document.getElementById("n2").value);
	var res = n1 + n2;
	
	document.getElementById("res").value = res;
}
