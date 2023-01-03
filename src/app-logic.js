const toDo = (title, desc, dueDate, prio) => {
    return { title, desc, dueDate, prio };
}

const project = (title) => {
    const toDos = [];
    const addToDo = (obj) => {
        toDos.push(obj);
    }
    const deleteToDo = () => {
        console.log('delete');
    }
    return { title, toDos, addToDo, deleteToDo  }
}

export { toDo, project };