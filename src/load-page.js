const loadPage = () => {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const page = document.createElement('div');
    const sidebar = document.createElement('div');
    const content = document.createElement('div');
    const footer = document.createElement('footer');
    const buttons = document.createElement('div');
    const addBtn = document.createElement('button');
    const addModal = document.createElement('div');
    const addModalContent = document.createElement('div');
    const words = document.createElement('p');
    const span = document.createElement('span');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    
    page.setAttribute('id', 'page');
    sidebar.setAttribute('id', 'sidebar');
    content.setAttribute('id', 'content');

    buttons.setAttribute('id', 'buttons');

    addBtn.setAttribute('id', 'add');
    addBtn.textContent = 'Add New';

    addModal.setAttribute('id', 'add-modal');

    addModalContent.setAttribute('id', 'add-modal-content');
    words.textContent = 'modal works!!';

    span.classList.add('close');
    span.textContent = 'x';


    menuBtn.setAttribute('id', 'sort');
    menuBtn.textContent = 'Sort';
    
    contactBtn.setAttribute('id', 'delete');
    contactBtn.textContent = 'Delete';

    buttons.appendChild(addBtn);
    buttons.appendChild(menuBtn);
    buttons.appendChild(contactBtn);
    sidebar.appendChild(buttons);
    page.appendChild(sidebar);
    page.appendChild(content);
    body.appendChild(header);
    body.appendChild(page);
    body.appendChild(footer);
    
    addModal.appendChild(addModalContent);
    addModalContent.appendChild(words);
    addModalContent.appendChild(span);
    body.appendChild(addModal);

}

export default loadPage;