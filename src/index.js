import { toDo, project } from "./app-logic"
import { displayToDo } from "./DOM-methods"

   // loadPage();

    const newTodo = toDo('Task 1', 'This thing I should do', 'tomorrow', 0 );
    const toDo2 = toDo('Task 2', 'buy a birthday present', 'Jan 11th', 1);
    const lowTodo = toDo('Task 3', 'Something i dont wanna do', 'eventually', -1);
    const myProject = project('Big Project', '1 month');

    myProject.addToDo(newTodo);
    myProject.addToDo(toDo2);
    myProject.addToDo(lowTodo);

   displayToDo(newTodo);
   displayToDo(toDo2);
   displayToDo(lowTodo);


   const addBtn = document.querySelector('#add');
   const modal = document.querySelector('#modal');
   const span = document.querySelector('.close');
   
   addBtn.addEventListener('click', () => {
      modal.style.display = 'block';
   });

   span.addEventListener('click', () => {
      modal.style.display = 'none';
   })

    

    