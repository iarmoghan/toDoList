document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('tasks');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskTitle = document.getElementById('task-title').value;
        const taskDesc = document.getElementById('task-desc').value;

        addTask(taskTitle, taskDesc);
        taskForm.reset();
    });

    function addTask(title, desc) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <h3>${title}</h3>
            <p>${desc}</p>
            <button class="complete-task">Complete</button>
            <button class="delete-task">Delete</button>
        `;

        taskList.appendChild(taskItem);

        taskItem.querySelector('.complete-task').addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        taskItem.querySelector('.delete-task').addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
});
