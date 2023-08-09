const addForm = document.querySelector(".add-form");
const taskInput = document.querySelector(".input-text");
const tasksContainer = document.querySelector(".tasks-list");
const deleteAllBtn = document.querySelector(".deleteAll-btn");


let taskList = JSON.parse(localStorage.getItem("task")) || [] ;

const saveLocalStorage =() => {
    localStorage.setItem("task", JSON.stringify(taskList))
};

const createTask = (task) => {
    const {name, id} = task

    return `
    <li>${name}
    <img class="delete-btn" src="/imagenes/tacho-de-basura.png" alt="boton de borrar" data-id="${id}">
    </li>`
};

const renderTask =() => {
    tasksContainer.innerHTML = taskList.map((task) => createTask(task)).join("");
}

const toglleDeleteAllButton =() => {
    if (!taskList.length) {
        deleteAllBtn.classList.add("hidden")
        return;
    }
    deleteAllBtn.classList.remove("hidden")
};

const correctoValorInput =() => {
   return taskInput.value.trim().replace(/\s+/g, "");
}

const isValidTask =(taskName) => {
  let isValid = true

    if (!taskName.length) {
        alert("Por favor, ingrese una tarea") 
        isValid = false
    }
    
    else if(
        taskList.some((task) => task.name.toLowerCase() === taskName.toLowerCase())
    ) {
        alert("Esa tarea ya existe")
        isValid = false
        }
        return isValid;

};

const addTask =(e) => {
  e.preventDefault();

  let taskName = correctoValorInput();

    if (isValidTask(taskName)) {
        taskList = [...taskList, {name: taskName, id: Date.now()}]
        addForm.reset();
        renderTask();
        saveLocalStorage();
        toglleDeleteAllButton();
    }
}

const deleteTask =(e) => {
  
    if (!e.target.classList.contains("delete-btn")) 
        return;
    
    const filterId = Number(e.target.dataset.id)     

    taskList = taskList.filter((task) => task.id !== filterId);

    renderTask();
    saveLocalStorage();
    toglleDeleteAllButton();
}

const deleteAllTasks =() => {
    taskList = [];

    renderTask();
    saveLocalStorage();
    toglleDeleteAllButton();
}

const init =() => {
  document.addEventListener("DOMContentLoaded", renderTask);
  addForm.addEventListener("submit", addTask);
  tasksContainer.addEventListener("click", deleteTask);
  deleteAllBtn.addEventListener("click", deleteAllTasks);
  document.addEventListener("DOMContentLoaded", toglleDeleteAllButton);
}

init();