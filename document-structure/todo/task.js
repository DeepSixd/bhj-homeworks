const tasksForm = document.getElementById('tasks__form'),
      tasksInput = document.getElementById('task__input'),
      tasksList = document.getElementById('tasks__list');


function addTask() {
    if (tasksInput.value.trim()) {
        tasksList.insertAdjacentHTML("beforeend", `
        <div class="task">
            <div class="task__title">
                ${tasksInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
    }
    tasksInput.value = null; 
}

tasksForm.addEventListener('submit', (el) => {
    el.preventDefault();
    addTask();
})



tasksList.addEventListener('click', (el) => {
    el.preventDefault();
    if  (el.target.classList.contains('task__remove')) {
        el.target.parentElement.remove();
    }
});
