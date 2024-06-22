# To-Do List Application

A simple To-Do List application built with vanilla JavaScript, HTML, and CSS. This application allows users to add, edit, delete, and mark tasks as complete.

## Features

- **Add Tasks:** Users can add new tasks with a title and description.
- **Edit and Delete Tasks:** Users can edit the details of existing tasks or delete them.
- **Mark as Complete:** Users can mark tasks as complete or incomplete.
- **Display Tasks:** Display tasks in a list format, differentiating between completed and incomplete tasks.

## Technologies Used

- **HTML:** Structure of the web page.
- **CSS:** Styling of the web page.
- **JavaScript:** Dynamic interactions and form submissions.

## Setup and Deployment

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript.
- A code editor such as Visual Studio Code.
- Git and GitHub for version control.
- A web browser for testing.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/todo-list-app.git
    cd todo-list-app
    ```

2. **Open the project in your code editor.**

3. **Open `index.html` in your web browser to view the application.**

### Deployment

You can deploy the application using GitHub Pages, Netlify, or Vercel. Here’s how to deploy with GitHub Pages:

1. **Commit and push your code to GitHub.**

    ```bash
    git add .
    git commit -m "Initial commit"
    git push origin main
    ```

2. **Go to your repository on GitHub.**

3. **Navigate to the "Settings" tab.**

4. **Scroll down to the "GitHub Pages" section.**

5. **Select the `main` branch as the source and save.**

6. **Your site will be published at `https://your-username.github.io/todo-list-app/`.**

## Usage

1. **Open the application(https://to-do-list-one-brown.vercel.app/) in your web browser.**
2. **Add a new task by filling out the title and description, then click "Add Task".**
3. **View your tasks in the list.**
4. **Mark a task as complete by clicking the "Complete" button.**
5. **Delete a task by clicking the "Delete" button.**

## Code Explanation

### HTML

The structure of the webpage is defined in `index.html`. It includes sections for adding tasks and displaying tasks.

### CSS

The styles for the application are defined in `styles.css`. It includes styles for the layout, forms, and task items.

### JavaScript

The functionality of the application is implemented in `script.js`.

- **Document Ready Event:**
    ```javascript
    document.addEventListener('DOMContentLoaded', () => {
    ```
    This ensures the JavaScript runs only after the HTML is fully loaded.

- **Form Submission:**
    ```javascript
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('tasks');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskTitle = document.getElementById('task-title').value;
        const taskDesc = document.getElementById('task-desc').value;

        addTask(taskTitle, taskDesc);
        taskForm.reset();
    });
    ```

- **Add Task Function:**
    ```javascript
    function addTask(title, desc) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <h3>${title}</h3>
            <p>${desc}</p>
            <button class="complete-task">Complete</button>
            <button class="delete-task">Delete</button>
        `;

        taskList.appendChild(t
