export default class ClickOnTaskDeleteBtn {
  initEvent() {
    const taskContainer = document.querySelector('.tasks-wrapper');
    taskContainer.addEventListener('click', (e) => {
      console.log(e.target)
      if (e.target.classList.contains('task__item-btn')) {
        this.deleteTask(e);
      }
    });
  }

  deleteTask(e) {    
    e.target.previousElementSibling.classList.toggle('completed');
    this.updateStorage();
  }

  updateStorage() {
    let savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];
    const tasks = document.querySelectorAll('.task__item-text.completed');

    savedTasks = savedTasks.map((item) => {
      tasks.forEach((task) => {
        if (task.innerHTML === item.title) {
          item.isCompleted = !item.isCompleted;
        }
      })
    })

    localStorage.setItem('_tasks', JSON.stringify(savedTasks));
  }
}
