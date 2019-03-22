window.onload = function () {
	Calculator();

	function Calculator() {
		let yinput = document.createElement('input')
		document.body.appendChild(yinput);

		let rezultat = document.createElement('input');
		document.body.appendChild(rezultat);
		document.body.innerHTML += ' = ' + '  Aici se va afisa raspunsul';
	}
	document.getElementById('container').style.height = '100px';
	document.getElementById('container').onmouseover = function () {
		document.getElementById('container').className = "verde";
		document.getElementById('container').style.background = "red";
	};
	let paragraphs = document.getElementById("paragraph").children;
	let i;
	for (i = 0; i < paragraphs.length; i++) {
		if (i % 2 == 0) {
			paragraphs[i].style.backgroundColor = "yellow";
		} else {
			paragraphs[i].style.backgroundColor = "lightblue";
		}
	};
	let list = document.getElementById('list')
	for (let i = 0; i < 10; i++) {
		list = document.createElement('li');
		document.body.appendChild(list);
		list.innerHTML = 'Element NR ' + '{{' + i + '}}';
		
	};
	console.log(list.innerHTML)
	list.style.backgroundColor = "purple";
	
	var btn = document.createElement("button");
    var text = document.createTextNode("CLICK ME");

    btn.setAttribute("style","color:red;font-size:23px");

    btn.appendChild(text);
    document.body.appendChild(btn);
}

setTimeout(function () {
	document.getElementById('body').style.background = "gray";
}, 3000);


