function addElement(elemType = '', elemId = '', elemText = '', parentElem = '', beforeElem = '', elemClasses = [], elemAttrib = {}) {
  if (!elemId) {
    elemId = 'my' + elemType.charAt(0).toUpperCase() + elemType.substr(1).toLowerCase();
  }
/*
  if (!elemText) {
    elemText = '&nbsp;';
  }
  if (elemText == "-") {
    elemText = '';
  }
*/
  if (!parentElem) {
    parentElem = document.body;
  }

  var elem = document.createElement(elemType);
  elem.id = elemId;

  var txt = elemText;

  elem.appendChild(document.createTextNode(txt));
  if (!beforeElem) {
    parentElem.appendChild(elem);
  } else {
    parentElem.insertBefore(elem, beforeElem);
  }

  elemClasses.forEach(x => elem.classList.add(x));

  Object.keys(elemAttrib).forEach(key => elem.setAttribute(key,elemAttrib[key]));

  return document.getElementById(elemId);
}
