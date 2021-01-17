export default class TasksStorageReader {
    getImportantUrgent() {
        const savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];

        return savedTasks.filter(task => task.isImportant && task.isUrgently)
    }

    getImportantNotUrgent() {
        const savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];

        return savedTasks.filter(task => task.isImportant && !task.isUrgently)
    }

    getNotImportantUrgent() {
        const savedTasks = JSON.parse(localStorage.getItem('_tasks'))?? [];

        return savedTasks.filter(task => !task.isImportant && task.isUrgently)
    }

    getNotImportantNotUrgent() {
        const savedTasks = JSON.parse(localStorage.getItem('_tasks'))?? [];

        return savedTasks.filter(task => !task.isImportant && !task.isUrgently)
    }
}
