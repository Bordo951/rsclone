import TaskItemRender from "./task-item-render";

export default class PlannerRender {
    constructor() {
        this.taskItemRender = new TaskItemRender()
    }

    renderPlanner() {
        this.taskItemRender.renderTasks()
    }
}
