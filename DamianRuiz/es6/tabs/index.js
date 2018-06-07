(() => {
	let btnCreate = document.getElementById('btnCreateTab');
	let list = document.getElementById('list');
	let containerElements = document.getElementById('contentTable');
	let tabsExist = 1;

	btnCreate.addEventListener('click', () => {
		let title = document.getElementById('title').value;
		let contentTab = document.getElementById('contentTab').value;
		if (title && title.length > 0 && contentTab && contentTab.length > 0){
			tabsExist += 1;
			createElement(list, 'li', title, 'list-element', `listElement${tabsExist}`);
			createElement(containerElements, 'div', contentTab, 'content-text none', tabsExist);

			addEventToElementList(`listElement${tabsExist}`, tabsExist);
		} else console.log('Ingresar Titulo y contenido');
	});
})();

function createElement(container, element, text, classElement, id){
	let node = document.createElement(element);
  let textnode = document.createTextNode(text);

  node.setAttribute('id', id);
  node.setAttribute('class', classElement);
  node.appendChild(textnode);
  container.appendChild(node);
}

function addEventToElementList(idElement, numElement){
	var divsExist = document.getElementsByClassName("list-element");
	for (let element of divsExist){
		if (element.id == idElement) element.addEventListener('click', (e) =>  changeTab(e, numElement) );
	}
}

function changeTab(evt, id) {
  let i, tabElements, tablinks;
  tabElements = document.getElementsByClassName('content-text');
  for (i = 0; i < tabElements.length; i++) {
    tabElements[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('list-element');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(id).style.display = 'block';
  evt.currentTarget.className += ' active';
}