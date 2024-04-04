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
function checkParams(param) {
	const url = new URL(document.URL);
	if(!param) {
		return url.searchParams.size > 0;
	} else {
		return url.searchParams.has(param);
	}
}
function getParam (param) {
	if (!checkParams()) { return null; }
	if (!checkParams(param)) { return null; }
	const url = new URL(document.URL);
	return url.searchParams.get(param);
}
function setParam (param,value) {
	const url = new URL(document.URL);
	url.searchParams.set(param,value);
	history.replaceState({},"",url);
}
function setParams (params = []) {
	const url = new URL(document.URL);
	params.forEach(x => {
		url.searchParams.set(x.param,x.value);
	});
	history.replaceState({},"",url);
}
function clearParams() {
	const url = new URL(document.URL);
	const newUrl = new URL(`${url.origin}${url.pathname}`);
	history.pushState({},"",newUrl);
}
function setInput(param, selector, index = 0) {
	const value = getParam(param);
	var target = document.querySelectorAll(selector)[index];
	target.value = value;
}
function setRadio(param, name) {
	if(!name) { name = param; }
	const value = getParam(param);
	const selector = `input[type="radio"][name="${name}"][value="${value}"]`;
	var target = document.querySelector(selector);
	log(target.outerHTML);
	target.checked = true;
}
function clearSearchParams() {
	const url = new URL(document.URL);
	url.searchParams.delete("id");
	history.pushState({},"",url);
}
