import TaskItemRender from "../renders/task-item-render";
import TasksInitializer from "../initializers/tasks-initializer";

export default class ClickOnTaskDeleteBtn {
  constructor() {
    this.taskItemRender = new TaskItemRender();
    this.tasksInitializer = new TasksInitializer();
  }

  initEvent() {
    const taskContainer = document.querySelector('.tasks-wrapper');
    if (taskContainer) {
      taskContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('task__item-btn')) {
          if (e.target.classList.contains('btn-removed-task')) {
            this.deleteTask(e);
          }
        }
      });
    }
  }

  deleteTask(e) {
    e.target.parentNode.parentNode.querySelector('.task__item-text').classList.add('removed');
    this.updateStorage();
  }

  updateStorage() {
    let savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];
    const tasks = document.querySelectorAll('.task__item-text.removed');
    const newSavedTasks = [];

    savedTasks.forEach((item) => {
      tasks.forEach((task) => {
        if (task.innerHTML !== item.title) {
          newSavedTasks.push(item);
        }
      })
    })

    localStorage.setItem('_tasks', JSON.stringify(newSavedTasks));
    this.taskItemRender.renderTasks();
    this.tasksInitializer.showTasksNumber();
  }
}
