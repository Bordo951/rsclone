import ClickOnPopup from '../events/click-on-popup';
import PlayAudio from "../helpers/play-audio";
import TaskManager from "../helpers/task-manager";

export default class ClickOnTaskEditBtn {
    constructor() {
        this.taskManager = new TaskManager();
        this.clickOnPopup = new ClickOnPopup();
        this.playAudio = new PlayAudio();
    }

    initEvent() {
        const taskContainer = document.querySelector('.action-wrapper');
        if (taskContainer) {
            taskContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('task__item-btn')) {
                    if (e.target.classList.contains('btn-edit-task')) {
                        this.updateTask(e);
                    }
                }
            });
        }
    }

    updateTask(e) {
        let currentTaskTitleHtml = e.target.parentNode.parentNode.querySelector('.task__item-text'),
            taskTitle = currentTaskTitleHtml.innerText,
            editableTask = this.taskManager.findTaskByTitle(taskTitle);

        this.playAudio.playAudio('click');
        this.clickOnPopup.showEditTaskPopup(editableTask);
    }
}
