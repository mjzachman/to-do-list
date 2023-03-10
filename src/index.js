import { toDo, project, validate } from "./app-logic"
import { display, refresh, empty } from "./DOM-methods"

    const chores = toDo('Task 1', 'clean my room', 'tomorrow', -1);
    const birthday = toDo('Task 2', 'buy a birthday present', 'Jan 11th', 1);
    const practice = toDo('Task 3', 'practice my code', 'everyday', 0);
    const apply = toDo('Task 4', 'apply for jobs', 'end of january', 1);

    const project1 = project('Personal');
    const project2 = project('Professional');

    project1.add(chores);
    project1.add(birthday);
    project2.add(practice);
    project2.add(apply);
    

   display(project1);
   display(project2);

   const projectList = project('Project List');
   projectList.add(project1);
   projectList.add(project2);
   let selected = 0;


   const addBtn = document.querySelector('#add');
   const modal = document.querySelector('#modal');
   const modalClose = document.querySelector('#modal-close');
   const submit = document.querySelector('#submit');
   
   const showAll = document.getElementById('Project List');
   const projects = document.querySelectorAll('.project');
   
   addBtn.addEventListener('click', () => {
      modal.style.display = 'block';
   });

   modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
   })

   submit.addEventListener('click', (e) => {
      const userInput = validate(e);
      for (let i = 0; i < projectList.toDos.length; i++){
         if (userInput.proj === projectList.toDos[i].title){
            projectList.toDos[i].add(userInput);
         }
      }
      refresh(projectList);
      makeButtonsWork();
      modal.style.display = 'none';
   })
    
  
    
   showAll.addEventListener('click', () => {
      refresh(projectList);
      makeButtonsWork();
      selected = 0;
   })

   projects.forEach((element) => {
      element.addEventListener('click', () => {
         const currID = element.getAttribute('id');
         if (currID === 'Personal'){selected = 1; makeButtonsWork();}
         if(currID ==='Professional'){selected = 2; makeButtonsWork();}
         for (let i = 0; i < projectList.toDos.length; i++){
            if (currID === projectList.toDos[i].title){
               empty();
               display(projectList.toDos[i]);
               makeButtonsWork();
            }
         }
      })
      
   })

   const makeButtonsWork = () => {
      const toDoClose = document.querySelectorAll('.to-do-close');
      toDoClose.forEach((button) => {
         button.addEventListener('click', () => {
         const closeID = button.getAttribute('id');
         console.log('remove the to do!');
         for(let i = 0; i < projectList.toDos.length; i++){
            for(let j = 0; j < projectList.toDos[i].toDos.length; j++){
               if (closeID === projectList.toDos[i].toDos[j].title){
                  projectList.toDos[i].toDos.splice(j,1);
                  if (selected === 0) {
                     refresh(projectList);
                  } else {
                     empty();
                     display(projectList.toDos[i]);
                  }
                  
                  makeButtonsWork();
               }
            }
         }
         })
      })
   }

   makeButtonsWork();