export default class ClickOnUpdateBtn {
  initEvent() {
    const updateBtn = document.querySelectorAll('.top-panel__btn-reset');
    updateBtn.forEach((btn) => {
      btn.addEventListener('click', this.updateTaskStorage.bind(this));
    })
  }

  updateTaskStorage() {
    //update - will delete task if it has 'completed' class 
  }
}
