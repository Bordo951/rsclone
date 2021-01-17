import TasksStorageReader from "../storage/tasks-storage-reader";
import TaskItemView from "../views/task-item-view";

export default class TaskItemRender {
    constructor() {
        this.taskStorageReader = new TasksStorageReader()
        this.taskItemView = new TaskItemView()
    }

    renderTasks(){
        this.renderMatrixTasks()
        this.renderListTasks()
    }

    renderMatrixTasks() {
        const listImportantUrgentHTML = document.getElementById('matrix_important_urgent')
        const listImportantNotUrgentHTML = document.getElementById('matrix_important_not_urgent')
        const listNotImportantUrgentHTML = document.getElementById('matrix_not_important_urgent')
        const listNotImportantNotUrgentHTML = document.getElementById('matrix_not_important_not_urgent')

        if(listImportantUrgentHTML) {
            const tasksImportantUrgent = this.taskStorageReader.getImportantUrgent()
            let resultHTML = ''
            tasksImportantUrgent.forEach(task => {
                resultHTML += this.taskItemView.getMatrixHTML(task)
            })
            listImportantUrgentHTML.innerHTML = resultHTML
        }

        if(listImportantNotUrgentHTML) {
            const tasksImportantNotUrgent = this.taskStorageReader.getImportantNotUrgent()
            let resultHTML = ''
            tasksImportantNotUrgent.forEach(task => {
                resultHTML += this.taskItemView.getMatrixHTML(task)
            })
            listImportantNotUrgentHTML.innerHTML = resultHTML
        }

        if(listNotImportantUrgentHTML) {
            const tasksNotImportantUrgent = this.taskStorageReader.getNotImportantUrgent()
            let resultHTML = ''
            tasksNotImportantUrgent.forEach(task => {
                resultHTML += this.taskItemView.getMatrixHTML(task)
            })
            listNotImportantUrgentHTML.innerHTML = resultHTML
        }

        if(listNotImportantNotUrgentHTML) {
            const tasksNotImportantNotUrgent = this.taskStorageReader.getNotImportantNotUrgent()
            let resultHTML = ''
            tasksNotImportantNotUrgent.forEach(task => {
                resultHTML += this.taskItemView.getMatrixHTML(task)
            })
            listNotImportantNotUrgentHTML.innerHTML = resultHTML
        }
    }

    renderListTasks() {
        const listImportantUrgentHTML = document.getElementById('list_important_urgent')
        const listImportantNotUrgentHTML = document.getElementById('list_important_not_urgent')
        const listNotImportantUrgentHTML = document.getElementById('list_not_important_urgent')
        const listNotImportantNotUrgentHTML = document.getElementById('list_not_important_not_urgent')

        if(listImportantUrgentHTML) {
            const tasksImportantUrgent = this.taskStorageReader.getImportantUrgent()
            let resultHTML = ''
            tasksImportantUrgent.forEach(task => {
                resultHTML += this.taskItemView.getListHTML(task, 'important')
            })
            listImportantUrgentHTML.innerHTML = resultHTML
        }

        if(listNotImportantUrgentHTML) {
            const tasksNotImportantUrgent = this.taskStorageReader.getNotImportantUrgent()
            let resultHTML = ''
            tasksNotImportantUrgent.forEach(task => {
                resultHTML += this.taskItemView.getListHTML(task, 'urgent')
            })
            listNotImportantUrgentHTML.innerHTML = resultHTML
        }

        if(listImportantNotUrgentHTML) {
            const tasksImportantNotUrgent = this.taskStorageReader.getImportantNotUrgent()
            let resultHTML = ''
            tasksImportantNotUrgent.forEach(task => {
                resultHTML += this.taskItemView.getListHTML(task, 'not-urgent')
            })
            listImportantNotUrgentHTML.innerHTML = resultHTML
        }

        if(listNotImportantNotUrgentHTML) {
            const tasksNotImportantNotUrgent = this.taskStorageReader.getNotImportantNotUrgent()
            let resultHTML = ''
            tasksNotImportantNotUrgent.forEach(task => {
                resultHTML += this.taskItemView.getListHTML(task, 'never-mind')
            })
            listNotImportantNotUrgentHTML.innerHTML = resultHTML
        }
    }
}
