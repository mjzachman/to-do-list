import { toDo, project, validate } from "./app-logic"
import { display, expand, remove } from "./DOM-methods"

    const chores = toDo('Task 1', 'clean my room', 'tomorrow', -1);
    const birthday = toDo('Task 2', 'buy a birthday present', 'Jan 11th', 1);
    const practice = toDo('Task 3', 'practice my code', 'everyday', 0);
    const apply = toDo('Task 4', 'apply for jobs', 'end of january', 1);

    const project1 = project('Personal');
    const project2 = project('Professional');

    const projectList = project('Project List')

    project1.add(chores);
    project1.add(birthday);
    project2.add(practice);
    project2.add(apply);

    projectList.add(project1);
    projectList.add(project2);

   display(chores);
   display(birthday);
   display(practice);
   display(apply);


   const addBtn = document.querySelector('#add');
   const modal = document.querySelector('#modal');
   const modalClose = document.querySelector('#modal-close');
   const submit = document.querySelector('#submit');
   const toDoClose = document.querySelectorAll('.to-do-close')
   
   addBtn.addEventListener('click', () => {
      modal.style.display = 'block';
   });

   modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
   })

   submit.addEventListener('click', (e) => {
      displayToDo(validate(e));
      modal.style.display = 'none';
   })
    
   toDoClose.forEach((button) => {
      button.addEventListener('click', () => {
      remove(newTodo);
      // remove to do from memory
      // remove to do display
      })
   })
    