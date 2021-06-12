let todoTasks = document.querySelector('.todoText');
let addTaskButton = document.querySelector('.addButton');
let taskList = document.querySelector('.todoList');
addTaskButton.addEventListener("click", addTodo);
taskList.addEventListener("click", removeChecked);


function addTodo(event) {
    event.preventDefault();
    let taskContainer = document.createElement('div');
    taskContainer.classList.add('todo', 'nes-container', 'is-rounded' ,'is-dark');
    let newTodo = document.createElement('li');
    newTodo.innerText = todoTasks.value;
    newTodo.classList.add('todo_item');
    taskContainer.appendChild(newTodo);
    if(todoTasks.value === ""){
        return null;
    }


    let completedTaskBtn = document.createElement('button');
    completedTaskBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedTaskBtn.classList.add('complete_btn', 'nes-btn', 'is-success');
    taskContainer.appendChild(completedTaskBtn);
 
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.classList.add('delete_btn', 'nes-btn', 'is-error')
    taskContainer.appendChild(deleteButton);
    taskList.appendChild(taskContainer);
    todoTasks.value = "";
}

    function removeChecked(eve) {
        let item = eve.target;
        if (item.classList[0] === "delete_btn") {
            let todo = item.parentElement;
            //ANIMATION TRANSITION
            todo.classList.add("deleteT")
            todo.addEventListener('transitionend', function () {
                todo.remove()
            })
        }
        if (item.classList[0] === "complete_btn") {
            let todo = item.parentElement;
            todo.classList.toggle("completedItem")
        }
    }
    