export default class TasksInitializer {
    init() {
        this.showTasksNumber();
    }

    getTasksNumber() {
        const tasks = JSON.parse(localStorage.getItem('_tasks')),
            uncompletedTasks = tasks.filter(function (e) {
                return e.isCompleted === false;
            })

        return uncompletedTasks.length;
    }

    showTasksNumber() {
        const totalTasks = document.querySelectorAll('.top-panel__count');
        totalTasks.forEach(e => e.innerHTML = this.getTasksNumber())
    }
}
