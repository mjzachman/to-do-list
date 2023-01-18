const display = (obj) => {
    const content = document.getElementById('content');

    obj.toDos.forEach(element => {
      const dispToDo = document.createElement('div');
      const toDoTitle = document.createElement('p');
      const toDoDesc = document.createElement('p');
      const del = document.createElement('span');
  
      dispToDo.classList.add('todo');
      toDoTitle.classList.add('title');
      toDoDesc.classList.add('desc');
      del.classList.add('close');
      del.classList.add('to-do-close');
  
      toDoTitle.textContent = element.title;
      toDoDesc.textContent = element.desc;
      del.textContent = 'x';
  
      if(element.prio === 1){
         dispToDo.classList.add('high-prio');
      }else if (element.prio === -1){
         dispToDo.classList.add('low-prio');
      }

      dispToDo.appendChild(toDoTitle);
      dispToDo.appendChild(toDoDesc);
      dispToDo.appendChild(del);
      content.appendChild(dispToDo);
   });
    }

    const refresh = (obj) => {
      empty();
      
      obj.toDos.forEach(element => {
         display(element);
      })
    }
    
    const empty = () => {
      const content = document.getElementById('content');

      while (content.firstChild) {
         console.log('removing another!');
         content.removeChild(content.lastChild);
      }
    }

 const expand = (obj) => {
    // given a selected to-do, expand the display to show all hidden information
 }


 export { display, refresh, empty };