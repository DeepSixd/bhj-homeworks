const tasksForm = document.getElementById('tasks__form'),
      tasksInput = document.getElementById('task__input'),
      tasksList = document.getElementById('tasks__list');


function addTask() {

    if (tasksInput.value) {
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
    const deleteBtn = document.querySelectorAll('.task__remove'); 
    deleteBtn.forEach(elem => {
        if (elem == el.target) {
            elem.parentElement.remove();
        }
    })
});
    
