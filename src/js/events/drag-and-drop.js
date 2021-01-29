import TaskManager from "../helpers/task-manager";

export default class DragAndDrop {
    constructor() {}

    initEvent() {
        const fill = document.querySelectorAll('.fill');
        const empties = document.querySelectorAll('.empty');

        //fill
        const dragStart = function () {
            setTimeout(() => (this.className = 'task__item invisible'), 0);
        };

        //fill
        const dragEnd = function () {
            this.className = 'task__item fill';
            let currentBox = document.querySelector('.empty.hovered');

            if(currentBox) {
                const title = this.querySelector('.task__item-text').innerText,
                    isUrgent = (currentBox.dataset['urgent'] === 'true'),
                    isImportant = (currentBox.dataset['important'] === 'true'),
                    taskManager = new TaskManager();

                taskManager.updateTaskImportanceAndUrgency(title, isUrgent, isImportant);
            }

            document.querySelectorAll('.empty__wrapper').forEach(function(board) {board.classList.remove('visible')});
            document.querySelectorAll('.empty').forEach(function(board) {board.classList.remove('hovered')});
        };

        const dragOver = function (e) {
            // Ref: https://developer.cdn.mozilla.net/en-US/docs/Web/API/Document/dragover_event
            e.preventDefault();
        };

        const dragEnter = function (e) {
            e.preventDefault();
            document.querySelectorAll('.empty__wrapper').forEach(function(board) {board.classList.add('visible')});
            this.classList.add('hovered');
        };

        const dragLeave = function () {
            document.querySelectorAll('.empty').forEach(function(board) {board.classList.remove('hovered')});
        };

        const dragDrop = function () {
            const fillHTML = document.querySelector('.invisible')
            this.querySelector('.task__list').append(fillHTML);
        };

        for (const element of fill) {
            element.addEventListener("dragstart", dragStart);
            element.addEventListener("dragend", dragEnd);
        }

        for (const empty of empties) {
            empty.addEventListener("dragover", dragOver);
            empty.addEventListener("dragenter", dragEnter);
            empty.addEventListener("dragleave", dragLeave);
            empty.addEventListener("drop", dragDrop);
        }
    }
}
