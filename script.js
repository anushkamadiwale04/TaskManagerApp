function addTask() {
    // Get the task list container and the input field
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const taskText = newTaskInput.value;

    // Check if the input field is not empty
    if (taskText) {
        // Create a new task item element
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item'); // Optional: Add a class for styling

        // Create a span element for the task text
        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        taskItem.appendChild(taskTextSpan);

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete-button'); // Optional: Add a class for styling
        deleteButton.onclick = function() {
            deleteTask(taskItem);
        };
        taskItem.appendChild(deleteButton);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        newTaskInput.value = '';
    }
}

// Function to delete a task
function deleteTask(taskItem) {
    taskItem.remove();
}
