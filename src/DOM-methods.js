const displayToDo = (obj) => {
    const content = document.getElementById('content');

    const dispToDo = document.createElement('div');
    dispToDo.classList.add('todo');

    const toDoTitle = document.createElement('p');
    toDoTitle.classList.add('title');

    const toDoDesc = document.createElement('p');
    toDoDesc.classList.add('desc');

    toDoTitle.textContent = obj.title;
    toDoDesc.textContent = obj.desc;

    dispToDo.appendChild(toDoTitle);
    dispToDo.appendChild(toDoDesc);
    content.appendChild(dispToDo);
 }

 export { displayToDo };