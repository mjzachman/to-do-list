import loadPage from "./load-page";
import { toDo, project } from "./app-logic"

 loadPage();

    const newTodo = toDo('Task 1', 'This thing I should do', 'tomorrow', 0 );
    const toDo2 = toDo('Task 2', 'buy a birthday present', 'Jan 11th', 1);
    const lowTodo = toDo('Task 3', 'Something i dont wanna do', 'eventually', -1);
    const myProject = project('Big Project', '1 month');

    myProject.addToDo(newTodo);
    myProject.addToDo(toDo2);
    myProject.addToDo(lowTodo);
 
    console.log(myProject.toDos);