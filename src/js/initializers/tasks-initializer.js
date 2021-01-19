export default class TasksInitializer {

    init() {
        this.showTasksNumber();
    }

    getTasks() {
        return JSON.parse(localStorage.getItem('_tasks'));
    }

    getUncompletedTasks() {
        if (!this.getTasks()) {
            return 0;
        }
        const uncompletedTasks = this.getTasks().filter(function (e) {
            return e.isCompleted === false;
        })
        return uncompletedTasks.length;
    }

    getCompletedTasks() {
        if (!this.getTasks()) {
            return 0;
        }
        const completedTasks = this.getTasks().filter(function (e) {
            return e.isCompleted === true;
        })
        return completedTasks.length;
    }

    showTasksNumber() {
        const unfinishedTasks = document.querySelectorAll('.top-panel__count-unfinished'),
            completedTasks = document.querySelectorAll('.top-panel__count-completed');
        unfinishedTasks.forEach(e => e.innerHTML = this.getUncompletedTasks());
        completedTasks.forEach(e => e.innerHTML = this.getCompletedTasks());
    }
}
