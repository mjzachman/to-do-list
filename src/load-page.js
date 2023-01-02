const loadPage = () => {
    const content = document.querySelector('#content');
    const pageDiv = document.createElement('div');
    const header = document.createElement('h1');
    const buttons = document.createElement('div');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    
    pageDiv.setAttribute('id', 'page');

    header.textContent = 'To Do List';
    

    buttons.setAttribute('id', 'buttons');

    homeBtn.setAttribute('id', 'add');
    homeBtn.textContent = 'Add New';

    menuBtn.setAttribute('id', 'sort');
    menuBtn.textContent = 'Sort';
    
    contactBtn.setAttribute('id', 'delete');
    contactBtn.textContent = 'Delete';

    buttons.appendChild(homeBtn);
    buttons.appendChild(menuBtn);
    buttons.appendChild(contactBtn);
    pageDiv.appendChild(header);
    content.appendChild(pageDiv);
    content.appendChild(buttons);

}

export default loadPage;