let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

function addTask(){

const input = document.getElementById("taskInput");

if(input.value.trim() === ""){
alert("Please enter a task");
return;
}

tasks.push({
text: input.value,
completed:false
});

saveTasks();

input.value = "";
}

function renderTasks(){

const list = document.getElementById("taskList");

list.innerHTML = "";

let completed = 0;

tasks.forEach((task,index)=>{

if(task.completed) completed++;

const li = document.createElement("li");

li.className = "task";

li.innerHTML = `
<span class="${task.completed ? 'completed' : ''}">
${task.text}
</span>

<div class="action-btns">

<button onclick="toggleTask(${index})">
✓
</button>

<button onclick="deleteTask(${index})">
🗑
</button>

</div>
`;

list.appendChild(li);

});

document.getElementById("totalTasks").innerText = tasks.length;
document.getElementById("completedTasks").innerText = completed;
document.getElementById("pendingTasks").innerText =
tasks.length - completed;
}

function toggleTask(index){

tasks[index].completed =
!tasks[index].completed;

saveTasks();
}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();
}

function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

renderTasks();
}

document
.getElementById("themeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});