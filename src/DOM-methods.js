const display = (obj) => {
    const content = document.getElementById('content');

    const dispToDo = document.createElement('div');
    const toDoTitle = document.createElement('p');
    const toDoDesc = document.createElement('p');
    const del = document.createElement('span');

    dispToDo.classList.add('todo');
    toDoTitle.classList.add('title');
    toDoDesc.classList.add('desc');
    del.classList.add('close');
    del.classList.add('to-do-close');

    toDoTitle.textContent = obj.title;
    toDoDesc.textContent = obj.desc;
    del.textContent = 'x';

    dispToDo.appendChild(toDoTitle);
    dispToDo.appendChild(toDoDesc);
    dispToDo.appendChild(del);
    content.appendChild(dispToDo);
 }

 const expand = (obj) => {
    // given a selected to-do, expand the display to show all hidden information
 }

 const remove = (obj) => {
    console.log('remove');
    //given a selected to-do, remove the display of that object
 }

 export { display, expand, remove };