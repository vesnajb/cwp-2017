var button = document.querySelector(".get-data-btn");

button.addEventListener('click', () =>{
	// console.log(this);

	fetch('https://jsonplaceholder.typicode.com/posts')//daj mi gi podatocite

	.then(function(response){
		return response.json();// obraboti gi
	})
	.then(function(data){
		// console.log(data);//ispecati gi

		data.forEach(function(v){
			var div = document.createElement('div');
			var h3 = document.createElement('h3');
			var p = document.createElement('p');
			var span = document.createElement('span');

			h3.innerText = v.title;
			p.innerText = v.body;
			span.innerText = 'userId: ' + v.userId + ',' + ' Id: ' + v.id;

			div.appendChild(h3);
			div.appendChild(p);
			div.appendChild(span);

			document.querySelector('body').appendChild(div);
		})

	});
});