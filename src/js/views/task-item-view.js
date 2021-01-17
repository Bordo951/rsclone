export default class TaskItemView {
    getMatrixHTML(task) {
        return `<li class="task__item">${task.title}</li>`
    }

    getListHTML(task, imgClassName='important') {
        return `<li class="task-list__item">
                  <div class="task-list__img-wrapper task-list__img_${imgClassName}">
                    <img class="task-list__img" src="assets/star.svg" alt="Star"/>
                  </div>
                  ${task.title}
                </li>`
    }
}
