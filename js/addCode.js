function addCode(inputVar = "") {
	if (!inputVar) {
		return;
	}
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.dataset.label = 'Injected Code';
	var c = "\n" + inputVar + "\n";
	console.log(c);
	try {
		s.appendChild(document.createTextNode(c));
		document.body.appendChild(s);
	} catch (e) {
		s.text = c;
		document.body.appendChild(s);
	}
}

function codeInjector(fn) {
	addCode(fn+[]);
}

codeInjector(addCode);
codeInjector(codeInjector);
