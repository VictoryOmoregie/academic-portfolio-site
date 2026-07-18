// Array to hold task data dynamically
let tasks = [];

// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to render tasks onto the screen
function renderTasks() {
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <span>${task.text}</span>
            <div class="task-actions">
                <button class="btn-action btn-complete" onclick="toggleTask(${index})">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button class="btn-action btn-delete" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a task
function addTask() {
    const text = taskInput.value.trim();
    if (text !== '') {
        tasks.push({ text: text, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

// Function to mark task as completed / incomplete
window.toggleTask = function(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
};

// Function to delete task from array
window.deleteTask = function(index) {
    tasks.splice(index, 1);
    renderTasks();
};

// Event Listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});