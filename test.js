const test = { auto: {} };

/*
test.f1 = function () {
	
};
test.auto.f1 = function () {
	
};
*/


/*
// const testDiv = document.getElementById('test-wrapper');
const pElem = document.querySelector('footer');
const testDiv = addElement('div','test-wrapper','-',pElem);

function addTest1() {
	const testLabel = addElement('label', 'test-1-label','0',testDiv,'',['test','range','label'],{for:'test-1'});
	const testInput = addElement('input', 'test-1','-',testDiv,'',['test','range','input'],{type:'range', name:'test-1', min:'50', max:'95', step:'5', value:'95'});
	testInput.addEventListener('input',runTest1);
	testInput.addEventListener('change',runTest1);
	runTest1();
}
function addTest2() {
	const btn = addElement('button','test-2-btn','Test 2',testDiv);
	btn.addEventListener('click', runTest2);
}

function runTest1() {
	const label = document.getElementById('test-1-label');
	const input = document.getElementById('test-1');
	const form = document.querySelector('form.form-wrapper');
	let val = input.value;
	let pct = val+'%';
	label.innerText = val;
	form.style.width = pct;
}
function runTest2() {
	const iBox = document.getElementById('input-query');
	iBox.value = 'Test1 Test2';
	
	runSearch();
}

function runTest3() {
	const iBox = document.getElementById('input-query');
	iBox.value = 'John Smith Regino';
	runSearch();
}


function addTest(num, callback) {
	let id = `test-${num}-btn`;
	let txt = `Test ${num}`;
	let cls = ['test-btn',`test-${num}`];
	const btn = addElement('button',id,txt,testDiv,'');
	btn.addEventListener('click',callback);
}

//addTest1();
//addTest2();
addTest('3',runTest3);

*/