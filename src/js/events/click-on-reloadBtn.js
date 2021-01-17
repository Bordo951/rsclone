export default class ClickOnReloadBtn {
  initEvent() {
    const updateBtn = document.querySelectorAll('.top-panel__btn-reset');
    updateBtn.forEach((btn) => {
      btn.addEventListener('click', this.updateTaskStorage.bind(this));
    })
  }

  updateTaskStorage() {
    let savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];

    savedTasks.forEach((task) => {
      if (task.isCompleted) {
        savedTasks.pop(task);
      }
    })
    
    localStorage.setItem('_tasks', JSON.stringify(savedTasks));
  }
}
