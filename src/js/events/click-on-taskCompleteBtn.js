import TaskItemRender from "../renders/task-item-render";
import TasksInitializer from "../initializers/tasks-initializer";

export default class ClickOnTaskCompleteBtn {
    constructor() {
        this.taskItemRender = new TaskItemRender();
        this.tasksInitializer = new TasksInitializer();
    }

    initEvent() {
        const taskContainer = document.querySelector('.action-wrapper');
        if (taskContainer) {
            taskContainer.addEventListener('click', (e) => {
                console.log('click on container')
                console.log(e.target)
                if (e.target.classList.contains('task__item-btn')) {
                    if (e.target.classList.contains('btn-completed-task')) {
                        console.log('click on btn')
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
