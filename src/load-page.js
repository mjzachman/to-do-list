const loadPage = () => {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const page = document.createElement('div');
    const sidebar = document.createElement('div');
    const content = document.createElement('div');
    const footer = document.createElement('footer');
    const buttons = document.createElement('div');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    
    page.setAttribute('id', 'page');
    sidebar.setAttribute('id', 'sidebar');
    content.setAttribute('id', 'content');

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
    sidebar.appendChild(buttons);
    page.appendChild(sidebar);
    page.appendChild(content);
    body.appendChild(header);
    body.appendChild(page);
    body.appendChild(footer);

}

export default loadPage;