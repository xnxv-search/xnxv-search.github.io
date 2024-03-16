function checkQuery() {
	const iBox = document.getElementById('input-query');
	return iBox.checkValidity();
}
function getRaw() {
	const iBox = document.getElementById('input-query');
	let query = iBox.value.trim();
	return query;
}
function getQuery() {
	const iBox = document.getElementById('input-query');
	let query = iBox.value.trim().replaceAll(/ +/g,'+');
	return encodeURI(query);
}
function getRadio(name) {
	let sel = `input[type="radio"][name="${name}"]:checked`;
	const checked = document.querySelector(sel);
	let val = checked.value;
	return val.trim();
}
function getInput() {
	if(!checkQuery()){ return false; }
	return {
		raw: getRaw(),
		query: getQuery(),
		site: getRadio('site'),
		dur: getRadio('dur')
	};
}
function getSites() {
	const sites = {
		xnxx: {
			search: {
				s: 'https://www.xnxx.com/search/%DUR%/%s',
				h: 'https://www.xnxx.com/search/%DUR%/hide_viewed_video/%s'
			},
			dur: {
				a: '10-20min',
				b: '10min+',
				c: '20min+'
			}
		},
		xv: {
			search: {
				s: 'https://www.xvideos.com/?k=%s&sort=relevance&durf=%DUR%',
				h: 'https://www.xvideos.com/?k=%s&sort=relevance&durf=%DUR%&vw=h'
			},
			dur: {
				a: '10-20min',
				b: '10min_more',
				c: '20min_more'
			}
		},
		show: function (s,d,h) {
			let hw = h ? 'h' : 's';
			let dur = this[s].dur[d];
			return this[s].search[hw].replace('%DUR%',dur);
		},
		query: function (q,s,d,h=true) {
			return this.show(s,d,h).replace('%s',q);
		}
	};
	return sites;
}
function buildUrl() {
	const i = getInput();
	const s = getSites();
	let q = s.query(i.query, i.site, i.dur);
	return q;
}
function aClicker(url) {
	const a = addElement('a','temp-anchor','Test3B');
	a.target = '_blank';
	a.href = url;
	a.style.display = 'none';
	a.click();
	a.remove();
}
function runSearch() {
	if(!checkQuery()){ return false; }
	inbox(0);
	outbox(1);
	updateName();
}
function buildName() {
	const i = getInput();
	const p = getRadio("type");
	const d = dt_getFullDate('yyyy.mm.dd');
	let name = `${i.site.toUpperCase()} (${p}${i.raw} -- ${d})`;
	return name;
}
function updateName() {
	if(!outbox('?')) { return false; }
	const out = document.getElementById('output-box');
	let name = buildName();
	out.value = name;
	updateTitle(name);
}
function updateTitle(suffix) {
	/*
	let nnewTitl;
	if (!suffix){
		newTitle = 'XNXV Search';
	}
	else {
		newTitle = ;
	}
	*/
	const newTitle = (!suffix) ? (`XNXV Search`) : (`${suffix} | XNXV Search`);
	document.title = newTitle;
	log('Title:',newTitle);
}
function back() {
	outbox(0);
	inbox(1);
	updateTitle();
}
function search() {
	if(!checkQuery()){ return false; }
	let url = buildUrl();
	aClicker(url);
}
function copy() {
	const out = document.getElementById('output-box');
	let text = this.innerText;
	let val = out.value;
	copyText(val);
	this.innerText = 'Copied!';
	setTimeout(()=>this.innerText = text, 1000);
}
function inbox(on) {
	const div = document.getElementById('input-div');
	if(on==='?') {return div.dataset.state==='active';}
	div.dataset.state = on ? 'active' : 'inactive';
}
function outbox(on) {
	const div = document.getElementById('output-div');
	const out = document.getElementById('output-box');
	if(on==='?') {return div.dataset.state==='active';}
	div.dataset.state = on ? 'active' : 'inactive';
	if(!on) { out.value = ''; }
}
function armRad() {
	let sel = [
		'input[type="radio"][name="site"]',
		'input[type="radio"][name="name-opt"]'
	];
	const btns = document.querySelectorAll(sel.join(','));
	btns.forEach(x => x.addEventListener('click',updateName));
}
function armBtn() {
	const runBtn = document.getElementById('btn-run');
	const resetBtn = document.getElementById('btn-reset');
	const backBtn = document.getElementById('backBtn');
	const searchBtn = document.getElementById('searchBtn');
	const copyBtn = document.getElementById('copyBtn');
	runBtn.addEventListener('click',runSearch);
	resetBtn.addEventListener('click',()=>outbox(0));
	backBtn.addEventListener('click',back);
	searchBtn.addEventListener('click',search);
	copyBtn.addEventListener('click',copy);
}
function armTxt() {
	const t = document.getElementById('input-query');
	t.addEventListener('input',()=>outbox(0));
	t.addEventListener('change',()=>outbox(0));
// 	t.addEventListener('change',outbox);
}
function init() {
	armBtn();
	armRad();
	armTxt();
	outbox(0);
}
init();