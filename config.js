function pageConfig() {
	const page = {
		name: "XNXV Search",
		title: "",
		version: "1.1.4",
		year: "2024",
		creator: "David Jarvis"
	};

	return pageConfigCheck(page);
}

function pageConfigCheck(page) {
	if(!page.name) { page.name = "Untitled"; }
	if(!page.title) { page.title = page.name; }
	if(!page.version) { page.version = "0.0.0"; }
	if(!page.year) { page.year = "0000"; }
	if(!page.creator) { page.creator = "Unknown Creator"; }
	return page;
}
function setPageConfig() {
	const page = pageConfig();
	const metaElements = document.querySelectorAll('[data-meta]');

	document.title = page.name;

	metaElements.forEach(elem => {
		let meta = elem.dataset.meta;
		let val = page[meta];
		log(meta, val);
		elem.textContent = val;
	});
}
setPageConfig();
