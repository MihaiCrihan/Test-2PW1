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
	let paragraphs = document.getElementById('paragraph').children;
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

	let btn = document.createElement('button');
	let text = document.createTextNode('CLICK ME!');
	btn.appendChild(text);
	document.body.appendChild(btn);
	btn.onclick = function (){
		list.remove(5);
	}
	let x = 1;
	let count = document.getElementById('cre')
	count.onclick = function (){
		count.innerHTML = 'Contor ' + x++ + ' ori';
	}
	let cerc = document.querySelectorAll(".cerc"); 
	let a;
	for (a = 0; a < cerc.length; a++) {
	cerc[a].style.backgroundColor = "black";
	}
}

setTimeout(function () {
	let ul = document.createElement('ul')
		document.body.appendChild(ul);
		for(i = 0; 1< 10; i++){
			let li = document.createElement('li')
			document.body.appendChild(li);
		}
}, 5000); 
setTimeout(function () {
	document.getElementById('body').style.background = "gray";
}, 5000);


