export default class ClickOnReloadBtn {
  initEvent() {
    const updateBtn = document.querySelectorAll('.top-panel__btn-reset');
    updateBtn.forEach((btn) => {
      btn.addEventListener('click', this.handleClickOnReloadBtn.bind(this));
    })
  }

  handleClickOnReloadBtn() {
    let savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];
    let unCompletedSavedTasks = savedTasks.filter(task => !task.isCompleted);

    localStorage.setItem('_tasks', JSON.stringify(unCompletedSavedTasks));
  }
}
