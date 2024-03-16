function addCss(inputVar = "") {
	if (!inputVar) {
		return;
	}
	var s = document.createElement("style");
	var c = "\n" + inputVar + "\n";
	//console.log(c);
	try {
		s.appendChild(document.createTextNode(c));
		document.head.appendChild(s);
	} catch (e) {
		s.text = c;
		document.head.appendChild(s);
	}
}
