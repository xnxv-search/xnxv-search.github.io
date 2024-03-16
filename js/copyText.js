function copyText(inputString) {
	var elem = document.createElement("textarea");
	elem.value = inputString;
	document.body.appendChild(elem);
	elem.select();
	document.execCommand("copy");
	document.body.removeChild(elem);
}
