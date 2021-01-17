export default class TasksStorageReader {
    getImportantUrgent() {
        const savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];

        return savedTasks.filter(task => task.isImportant && task.isUrgently && !task.isCompleted)
    }

    getImportantNotUrgent() {
        const savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];

        return savedTasks.filter(task => task.isImportant && !task.isUrgently && !task.isCompleted)
    }

    getNotImportantUrgent() {
        const savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];

        return savedTasks.filter(task => !task.isImportant && task.isUrgently && !task.isCompleted)
    }

    getNotImportantNotUrgent() {
        const savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];

        return savedTasks.filter(task => !task.isImportant && !task.isUrgently && !task.isCompleted)
    }
}
