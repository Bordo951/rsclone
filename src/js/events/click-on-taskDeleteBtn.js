export default class ClickOnTaskDeleteBtn {
  initEvent() {
    const deleteBtns = document.querySelectorAll('.task__item-btn');
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', this.deleteTask.bind(this));
    })
  }

  deleteTask(e) {
    e.target.previousElementSibling.classList.toggle('completed');
    this.updateStorage();
  }

  updateStorage() {
    let savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];
    const tasks = document.querySelectorAll('.task__item-text.completed');

    savedTasks = savedTasks.map((item)=>{
      tasks.forEach((task)=> {
        if (task.innerHTML === item.title) {
          item.isCompleted = !item.isCompleted;
        }
      })
    })

    localStorage.setItem('_tasks', JSON.stringify(savedTasks));
  }
}
