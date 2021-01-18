import TaskManager from "../helpers/task-manager";

export default class ClickOnDeleteAllTasks {
    constructor() {
        this.taskManager = new TaskManager();
    }

    initEvent() {
        const btnDeleteAllTasks = document.getElementById('btn-delete-all-tasks');

        if (btnDeleteAllTasks) {
            btnDeleteAllTasks.addEventListener('click', () => {

                this.taskManager.removingAllTasksWithConfirmed();
            })
        }
    }
}
