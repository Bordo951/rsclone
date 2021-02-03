import TasksInitializer from "../initializers/tasks-initializer";
import TaskItemRender from "../renders/task-item-render";
import TranslationHelper from "../helpers/translation-helper";
import PlayAudio from "../helpers/play-audio";
import DragAndDrop from "./drag-and-drop";
import TaskManager from "../helpers/task-manager";

export default class ClickOnPopup {
    constructor() {
        this.taskItemRender = new TaskItemRender();
        this.tasksInitializer = new TasksInitializer();
        this.translationHelper = new TranslationHelper();
        this.isSaving = false;
        this.playAudio = new PlayAudio();
        this.dragAndDrop = new DragAndDrop();
        this.taskManager = new TaskManager();
    }

    initEvent() {
        const showPopup = document.querySelectorAll('[data-show="popup"]');
        showPopup.forEach((btn) => {
            btn.addEventListener('click', this.showPopup.bind(this));
        });
        this.addPopupEventListener();
    }

    showPopup() {
        document.querySelector('#task-popup').classList.remove('hide');
        document.querySelector('#popup-shadow').classList.remove('hide');
        document.body.classList.add('lock');
        this.clearPopUp();
        this.playAudio.playAudio('click');
    }

    showEditTaskPopup(task) {
        let taskPopup = document.getElementById('task-popup');
            taskPopup.classList.add('editable-task');

        this.showPopup();
        this.setTaskPopupData(task);
    }

    setTaskPopupData(task) {
        document.getElementById('current-task-name').value = task.title;
        document.getElementById('new-task-name').value = task.title;
        document.getElementById('new-task-textarea').value = task.description;

        if (task.isImportant) {
            document.getElementById('new-task-value').checked = true;
            document.getElementById('new-task-value').classList.add('checked');
        }

        if (task.isUrgently) {
            document.getElementById('new-task-time').checked = true;
            document.getElementById('new-task-time').classList.add('checked');
        }
    }


    closePopup() {
        let confirmMessage = this.translationHelper.translateByKey('confirm_close_pop_up');
        if (!this.isSaving) {
            if (!confirm(`${confirmMessage}`)) {
                return
            }
        }

        document.querySelector('#task-popup').classList.remove('editable-task');
        document.getElementById('current-task-name').value = '';

        document.querySelector('#task-popup').classList.add('hide');
        document.querySelector('#popup-shadow').classList.add('hide');
        document.body.classList.remove('lock');
        this.removeTitleTaskExistsError();
        this.tasksInitializer.showTasksNumber();
        this.playAudio.playAudio('click');
    }

    toggleCheckbox(e) {
        if (e.target.checked === true) {
            e.target.classList.add('checked');
        } else {
            e.target.classList.remove('checked');
        }
    }

    addError() {
        const labelHTML = document.querySelector('[for="new-task-name"]'),
            inputHTML = document.getElementById('new-task-name');

        labelHTML.classList.add('error__label');
        inputHTML.classList.add('error__input');
    }

    removeError() {
        const labelHTML = document.querySelector('[for="new-task-name"]'),
            inputHTML = document.getElementById('new-task-name');
        labelHTML.classList.remove('error__label');
        inputHTML.classList.remove('error__input');
    }

    addTitleTaskExistsError() {
        const errorMessageHTML = document.getElementById('error__repeating-title');

        errorMessageHTML.classList.add('error__repeating-title_visible');
        this.addError();
    }

    removeTitleTaskExistsError() {
        const errorMessageHTML = document.getElementById('error__repeating-title');

        errorMessageHTML.classList.remove('error__repeating-title_visible');
        this.removeError();
    }

    clearPopUp() {
        document.getElementById('current-task-name').value = '';
        document.getElementById('new-task-name').value = '';
        document.getElementById('new-task-textarea').value = '';
        document.getElementById('new-task-value').checked = false;
        document.getElementById('new-task-time').checked = false;
        document.getElementById('new-task-value').classList.remove('checked');
        document.getElementById('new-task-time').classList.remove('checked');
    }

    addPopupEventListener() {
        const closePopupBtn = document.querySelector('#close-popup'),
            closePopupShadow = document.querySelector('#popup-shadow'),
            addTaskBtn = document.querySelector('#add-new-task'),
            checkbox = document.querySelectorAll('.new-task__checkbox');

        if (closePopupBtn && closePopupShadow && addTaskBtn) {
            closePopupBtn.addEventListener('click', this.closePopup.bind(this));
            closePopupShadow.addEventListener('click', (e) => {
                if (e.target.id === "popup-shadow") {
                    this.closePopup();
                }
                e.stopPropagation();
            });
            addTaskBtn.addEventListener('click', this.addNewTask.bind(this));
        }
        checkbox.forEach((input) => {
            input.addEventListener('click', this.toggleCheckbox);
        })
    }

    addNewTask() {
        const titleValue = document.getElementById('new-task-name').value.trim(),
            descriptionValue = document.getElementById('new-task-textarea').value,
            isImportantValue = document.getElementById('new-task-value').checked,
            isUrgentlyValue = document.getElementById('new-task-time').checked,
            isEditablePopup = document.getElementById('task-popup').classList.contains('editable-task');

        if (this.taskManager.isTitleTaskExists(titleValue) && !isEditablePopup) {
                this.addTitleTaskExistsError();
                return ;
        } else {
            this.removeTitleTaskExistsError();
        }

        if (titleValue && !isEditablePopup) {
            let savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? [];//deserialization
            let taskValue = {
                title: titleValue,
                description: descriptionValue,
                isImportant: isImportantValue,
                isUrgently: isUrgentlyValue,
                isCompleted: false
            };

            savedTasks.push(taskValue); //pushed
            localStorage.setItem('_tasks', JSON.stringify(savedTasks));//serialization
            this.isSaving = true;
            this.clearPopUp();
            this.closePopup();
            this.isSaving = false;
            this.taskItemRender.renderTasks();
            this.dragAndDrop.initEvent();

        } else if (isEditablePopup) {
            let currentTaskName = document.getElementById('current-task-name').value,
                isNewInputValue = currentTaskName !== titleValue;

            if (this.taskManager.isTitleTaskExists(titleValue) && isNewInputValue) {
                 this.addTitleTaskExistsError();
                 return;
            } else {
                this.taskManager.updateTaskImportanceAndUrgency(currentTaskName, isUrgentlyValue, isImportantValue);
                this.taskManager.updateTaskTitleDescription(currentTaskName, titleValue, descriptionValue);
                document.getElementById('current-task-name').value = titleValue;
                this.taskItemRender.renderTasks();
                this.dragAndDrop.initEvent();
                this.isSaving = true;
                this.clearPopUp();
                this.closePopup();
                this.isSaving = false;
            }
        } else {
            this.addError();
        }
    }
}
