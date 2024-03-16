function addParam(url, param, value) {
   var a = document.createElement('a'), regex = /(?:\?|&amp;|&)+([^=]+)(?:=([^&]*))*/g;
   var match, str = []; a.href = url; param = encodeURIComponent(param);
   while (match = regex.exec(a.search))
       if (param != match[1]) str.push(match[1]+(match[2]?"="+match[2]:""));
   str.push(param+(value?"="+ encodeURIComponent(value):""));
   a.search = str.join("&");
   return a.href;
}
function checkParam() {
	const url = new URL(document.URL);
	const id = url.searchParams.getAll("id").length;
	return  id > 0;
}
function getParam () {
	const url = new URL(document.URL);
	const id = url.searchParams.get("id");
	return id;
}

function setId () {
	const url = new URL(document.URL);
	const codes = getInput().join(',');
	url.searchParams.set("id",codes);
	// console.log(url.toString());
	history.replaceState({},"",url);
}
function clearId() {
	const url = new URL(document.URL);
	url.searchParams.delete("id");
	history.pushState({},"",url);
}
