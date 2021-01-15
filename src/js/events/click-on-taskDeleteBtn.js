export default class ClickOnTaskDeleteBtn {
  initEvent() {
    const deleteBtns = document.querySelectorAll('.task__item-btn');
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', this.deleteTask.bind(this));
    })
  }

  deleteTask(e) {
    e.target.previousElementSibling.classList.toggle('completed');
  }
}
