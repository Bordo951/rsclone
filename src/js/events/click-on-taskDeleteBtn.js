import TaskItemRender from "../renders/task-item-render";
import TasksInitializer from "../initializers/tasks-initializer";
import PlayAudio from "../helpers/play-audio";

export default class ClickOnTaskDeleteBtn {
  constructor() {
    this.taskItemRender = new TaskItemRender();
    this.tasksInitializer = new TasksInitializer();
    this.playAudio = new PlayAudio();
  }

  initEvent() {
    const taskContainer = document.querySelector('.action-wrapper');
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
    let currentTaskTitleHtml = e.target.parentNode.parentNode.querySelector('.task__item-text');
    currentTaskTitleHtml.classList.toggle('removed');
    this.updateStorage(currentTaskTitleHtml);
    this.playAudio.playAudio('delete-task');
  }

  updateStorage(currentTaskTitleHtml) {
    let savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];
    const newSavedTasks = [];

    savedTasks.forEach((item) => {
        if (currentTaskTitleHtml.innerHTML !== item.title) {
          newSavedTasks.push(item);
        }
    })

    localStorage.setItem('_tasks', JSON.stringify(newSavedTasks));
    this.taskItemRender.renderTasks();
    this.tasksInitializer.showTasksNumber();
  }
}
