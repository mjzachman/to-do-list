const toDo = (title, desc, dueDate, prio) => {
    return { title, desc, dueDate, prio };
}

const project = (title) => {
    const toDos = [];
    const add = (obj) => {
        toDos.push(obj);
    }
    const remove = () => {
        console.log('delete');
    }
    return { title, toDos, add, remove  }
}

const validate = (event) => {
    event.preventDefault();
    
    const form = document.querySelector('form');
    const taskName = document.querySelector('#task_name').value;
    const taskDesc = document.querySelector('#task_desc').value;
    const taskDate = document.querySelector('#task_date').value;
    let taskPrio = document.querySelector('input[name="task_prio"]:checked').value;

    switch (taskPrio) {
        case 'high':
            taskPrio = 1;
            break;
        case 'norm':
            taskPrio = 0;
            break;
        case 'low':
            taskPrio = -1;
            break;
        default:
            taskPrio = 0;
    }

    const userToDo = toDo(taskName, taskDesc, taskDate, taskPrio)
    clearForm(form);
    return userToDo;
}

const clearForm = (oForm) => {
   
        var elements = oForm.elements;
         
        oForm.reset();
      
        for(let i=0; i<elements.length; i++) {
           
        const field_type = elements[i].type.toLowerCase();
       
        switch(field_type) {
       
          case "text":
          case "password":
          case "textarea":
                case "hidden":  
           
            elements[i].value = "";
            break;
             
          case "radio":
          case "checkbox":
              if (elements[i].checked) {
                elements[i].checked = false;
            }
            break;
      
          case "select-one":
          case "select-multi":
                      elements[i].selectedIndex = -1;
            break;
      
          default:
            break;
        }
          }
      }  



export { toDo, project, validate };