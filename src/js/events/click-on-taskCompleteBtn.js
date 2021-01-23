import TaskItemRender from "../renders/task-item-render";
import TasksInitializer from "../initializers/tasks-initializer";
import PlayAudio from "../helpers/play-audio";

export default class ClickOnTaskCompleteBtn {
    constructor() {
        this.taskItemRender = new TaskItemRender();
        this.tasksInitializer = new TasksInitializer();
        this.playAudio = new PlayAudio()
    }

    initEvent() {
        const taskContainer = document.querySelector('.action-wrapper');
        if (taskContainer) {
            taskContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('task__item-btn')) {
                    if (e.target.classList.contains('btn-completed-task')) {
                        this.completeTask(e);
                    }
                }
            });
        }
    }

    completeTask(e) {
        let currentTaskTitleHtml = e.target.parentNode.parentNode.querySelector('.task__item-text');
        currentTaskTitleHtml.classList.toggle('completed');
        this.updateStorage(currentTaskTitleHtml);
        this.playAudio.playAudio('completed');
    }

    updateStorage(currentTaskTitleHtml) {
        let savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];
        const newSavedTasks = [];

        savedTasks.forEach((item) => {
            if (currentTaskTitleHtml.innerHTML === item.title) {
                item.isCompleted = !item.isCompleted;
            }
            newSavedTasks.push(item);
        })

        localStorage.setItem('_tasks', JSON.stringify(newSavedTasks));
        this.taskItemRender.renderTasks();
        this.tasksInitializer.showTasksNumber();
    }
}
