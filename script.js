const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask(){

    if(taskInput.value.trim() === ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskInput.value;

    li.addEventListener("click", function(){
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";

    deleteBtn.addEventListener("click", function(e){
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}