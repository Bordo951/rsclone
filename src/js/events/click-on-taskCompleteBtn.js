import TaskItemRender from "../renders/task-item-render";
import TasksInitializer from "../initializers/tasks-initializer";
import PlayAudio from "../helpers/play-audio";
import ConfettiMaker from "../helpers/confetti-maker";

export default class ClickOnTaskCompleteBtn {
    constructor() {
        this.taskItemRender = new TaskItemRender();
        this.tasksInitializer = new TasksInitializer();
        this.playAudio = new PlayAudio();
        this.confettiMaker = new ConfettiMaker();
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
    }

    updateStorage(currentTaskTitleHtml) {
        let savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];
        const newSavedTasks = [];

        savedTasks.forEach((item) => {
            if (currentTaskTitleHtml.innerHTML === item.title) {
                item.isCompleted = !item.isCompleted;

                if (item.isCompleted) {
                    this.confettiMaker.runConfetti();
                    this.playAudio.playAudio('completed');
                } else {
                    this.playAudio.playAudio('click');
                }

            }
            newSavedTasks.push(item);
        })

        localStorage.setItem('_tasks', JSON.stringify(newSavedTasks));
        this.taskItemRender.renderTasks();
        this.tasksInitializer.showTasksNumber();
    }
}
