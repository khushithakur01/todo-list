document.querySelector('#push').onclick = function () {
    let taskInput = document.querySelector('#newtask input');
    
    if (taskInput.value.length == 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">${taskInput.value}</span>
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="far fa-trash-alt"></i></button>
            </div>
        `;

        // Delete Task
        let deleteButtons = document.querySelectorAll(".delete");
        deleteButtons.forEach((btn) => {
            btn.onclick = function () {
                this.parentNode.remove();
            };
        });

        // Mark Task as Completed
        let tasks = document.querySelectorAll(".task");
        tasks.forEach((task) => {
            task.onclick = function () {
                this.classList.toggle('completed');
            };
        });

        // Edit Task
        let editButtons = document.querySelectorAll(".edit");
        editButtons.forEach((editBtn) => {
            editBtn.onclick = function () {
                let taskText = this.parentNode.querySelector("#taskname");
                let newText = prompt("Edit your task:", taskText.innerText);
                if (newText !== null && newText.trim() !== "") {
                    taskText.innerText = newText;
                }
            };
        });

        // Clear Input Field
        taskInput.value = "";
    }
};
