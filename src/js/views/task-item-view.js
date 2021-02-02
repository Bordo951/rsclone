export default class TaskItemView {
    getMatrixHTML(task) {
        let completedClass = task.isCompleted ? 'completed' : '';

        return `<li class="task__item fill" draggable="true">                    
                    <p class="task__item-text ${completedClass}">${task.title}</p>
                    <div class="task__item-btn-wrapper">
                        <div class="task__item-btn btn-completed-task fas fa-check"></div>
                        <div class="task__item-btn btn-edit-task fas fa-pencil-alt"></div>
                        <div class="task__item-btn btn-removed-task fas fa-times"></div>                    
                    </div>
                </li>`
    }

    getListHTML(task, imgClassName='important') {
        let completedClass = task.isCompleted ? 'completed' : '';

        return `<li class="task-list__item fill" draggable="true">
                  <div class="task-list__img-wrapper task-list__img_${imgClassName}">
                    <img class="task-list__img" src="assets/star.svg" alt="Star"/>
                  </div>
                  <p class="task__item-text ${completedClass}">${task.title}</p>
                  <div class="task__item-btn-wrapper">
                    <div class="task__item-btn btn-completed-task fas fa-check"></div>
                    <div class="task__item-btn btn-edit-task fas fa-pencil-alt"></div>
                    <div class="task__item-btn btn-removed-task fas fa-times"></div>                    
                  </div>
                </li>`
    }
}
