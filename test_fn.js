function goTest() {
	runAutoFunctions();
	const sect = buildSections();
	const fnList = getFunctionList();
	buildButtons(fnList);
	sect.div.style.position = 'fixed';
	sect.div.style.bottom = '5px';
	sect.div.style.left = '5px';
}
function buildSections() {
	const d = document.body;
	const e = 'div';
	const id = [
		'test-gen-area',
		'test-btn-area',
		'test-out-area'
	];
	const classes = id.map(x => [
		x.replace('-area',''),
		'wrapper'
	]);
	const div = addElement(e,id[0],'',d,'',classes[0]);
	const sub = addElement(e,id[1],'',div,'',classes[1]);
	const out = addElement(e,id[2],'',div,'',classes[2]);
	return {div,sub,out};
}
function buildButtons(fnlist) {
	const div = document.querySelector('#test-btn-area');
	const e ='button';
	const x = 'test-btn';
	let btn, i, c = [];
	fnlist.forEach((fn,y) => {
		i = x+'-'+(y+1);
		c = [x,i];
		btn = addElement(e,i,`Test #${y+1}`,div,'',c);
		btn.addEventListener('click',fn);
	});
}
function getFunctionList() {
	const fn  = Object.entries(test)
	.filter(x=>x.length==2&&typeof x[1] =='function')
	.filter(x=>x.length==2&&typeof x[1] =='function')
	.map((x,y)=>x[1]);
	return fn;
}
function runAutoFunctions() {
	const fn  = Object.entries(test.auto)
	.filter(x=>x.length==2&&typeof x[1] =='function')
	.filter(x=>x.length==2&&typeof x[1] =='function')
	.map((x,y)=>x[1]);
	fn.forEach(x => x());
}
goTest();