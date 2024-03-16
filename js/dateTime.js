function dt_zPad (x) {
	return '00'.concat(x).slice(-2);
}

function dt_getMonth () {
	var d = new Date();
	var o = d.getMonth() + 1;
	var out = dt_zPad(o);
	return out;
}

function dt_getDate () {
	var d = new Date();
	var o = d.getDate();
	var out = dt_zPad(o);
	return out;
}

function dt_getYear () {
	var d = new Date();
	var out = d.getFullYear();
	return out;
}

function dt_getTime () {
	var d = new Date();
	var h = d.getHours(),
			m = d.getMinutes(),
			s = d.getSeconds();
	var hh = dt_zPad(h),
			mm = dt_zPad(m),
			ss = dt_zPad(s);
	var out = `${hh}:${mm}:${ss}`;
	return out;
}

function dt_getTime_12 () {
	var d = new Date();
	var h = d.getHours(),
			m = d.getMinutes(),
			s = d.getSeconds();
	var hh = dt_zPad(h%12),
			mm = dt_zPad(m),
			ss = dt_zPad(s);
	var ampm = h <= 12 ? 'AM' : 'PM';
	var out = `${hh}:${mm}:${ss} ${ampm}`;
	return out;
}

function dt_getFullDate (format) {
	var m = dt_getMonth(),
			d = dt_getDate(),
			y = dt_getYear();
	//var date = `${y}-${m}-${y}`;
	var date = format || 'yy-mm-dd';
	date = date.replace(/y+/, y);
	date = date.replace(/m+/, m);
	date = date.replace(/d+/, d);
	return date;
}

function dt_getDateTime () {
	var date = dt_getFullDate('mm/dd/yy');
	var time = dt_getTime_12();
	var out = date + ' ' + time;
	return out;
}

function dt_getTimestamp () {
	var date = dt_getFullDate('ymd');
	var time = dt_getTime().replaceAll(':','');
	var out = date + '_' + time;
	return out;
}
