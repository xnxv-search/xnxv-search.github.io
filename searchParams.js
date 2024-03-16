function addParam(param, value) {
	const url = document.URL;
   var a = document.createElement('a'),
  		regex = /(?:\?|&amp;|&)+([^=]+)(?:=([^&]*))*/g;
   var match, str = []; a.href = url;
   param = encodeURIComponent(param);
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

function setParam (param,value) {
	const url = new URL(document.URL);
	url.searchParams.set(param,value);
	history.replaceState({},"",url);
}
function clearSearchParams() {
	const url = new URL(document.URL);
	url.searchParams.delete("id");
	history.pushState({},"",url);
}
