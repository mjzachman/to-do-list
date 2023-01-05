const loadPage = () => {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const title = document.createElement('p');
    const page = document.createElement('div');
    const sidebar = document.createElement('div');
    const content = document.createElement('div');
    const footer = document.createElement('footer');
    const buttons = document.createElement('div');
    const addBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    
    page.setAttribute('id', 'page');
    sidebar.setAttribute('id', 'sidebar');
    content.setAttribute('id', 'content');

    title.setAttribute('id', 'title');
    title.textContent = 'To Do List';

    buttons.setAttribute('id', 'buttons');

    addBtn.setAttribute('id', 'add');
    addBtn.textContent = 'Add New';

    

    menuBtn.setAttribute('id', 'sort');
    menuBtn.textContent = 'Sort';
    
    contactBtn.setAttribute('id', 'delete');
    contactBtn.textContent = 'Delete';

    header.appendChild(title);
    buttons.appendChild(addBtn);
    buttons.appendChild(menuBtn);
    buttons.appendChild(contactBtn);
    sidebar.appendChild(buttons);
    page.appendChild(sidebar);
    page.appendChild(content);
    body.appendChild(header);
    body.appendChild(page);
    body.appendChild(footer);
    createModal();

}


const createModal = () => {
    const body = document.querySelector('body');
    const addModal = document.createElement('div');
    const addModalContent = document.createElement('div');
    const words = document.createElement('p');
    const span = document.createElement('span');
    
    addModal.setAttribute('id', 'add-modal');

    addModalContent.setAttribute('id', 'add-modal-content');
    words.textContent = 'modal works!!';

    span.classList.add('close');
    span.textContent = 'x';
    addModal.appendChild(addModalContent);
    addModalContent.appendChild(span);
    addModalContent.appendChild(words);
    
    body.appendChild(addModal);

}

export default loadPage;