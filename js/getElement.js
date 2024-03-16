function getElement(selector,index,parent,limit){
	return new Promise((resolve,reject) => {
		index = (index ?? '') || '0';
		limit = (limit ?? '') || 1200;
		const base = (parent && parent instanceof Element) ? parent : document.body;
		let count = 0;
		(function waitForFoo() {
		const element = base.querySelectorAll(selector)[index];
		if (element) return resolve(element);
		if (limit && count > limit) return false;
		count += 1;
		setTimeout(waitForFoo, 50);
		})();
	});
}
