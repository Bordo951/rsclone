import TasksInitializer from "../initializers/tasks-initializer";
import TaskItemRender from "../renders/task-item-render";
import ChangeLanguage from "../helpers/change-language";
import TranslationHelper from "../helpers/translation-helper";
import PlayAudio from "../helpers/play-audio";

export default class ClickOnPopup {
    constructor() {
        this.taskItemRender = new TaskItemRender();
        this.tasksInitializer = new TasksInitializer();
        this.changeLanguage = new ChangeLanguage();
        this.translationHelper = new TranslationHelper();
        this.isSaving = false;
        this.playAudio = new PlayAudio();
    }

    initEvent() {
        const showPopup = document.querySelectorAll('[data-show="popup"]');
        showPopup.forEach((btn) => {
            btn.addEventListener('click', this.showPopup.bind(this));
        })
        this.addPopupEventListener();
    }

    showPopup() {
        document.querySelector('#task-popup').classList.remove('hide');
        document.querySelector('#popup-shadow').classList.remove('hide');
        document.body.classList.add('lock');
        this.clearPopUp();
        this.playAudio.playAudio('click');
    }

    closePopup() {
        let confirmMessage = this.translationHelper.translateByKey('confirm_close_pop_up');
        if (!this.isSaving) {
            if (!confirm(`${confirmMessage}`)) {
                return
            }
        }
        document.querySelector('#task-popup').classList.add('hide');
        document.querySelector('#popup-shadow').classList.add('hide');
        document.body.classList.remove('lock');
        this.removeError();
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

    clearPopUp() {
        document.getElementById('new-task-name').value = '';
        document.getElementById('new-task-textarea').value = '';
        document.getElementById('new-task-value').checked = false;
        document.getElementById('new-task-time').checked = false;
        document.querySelector('#new-task-value').classList.remove('checked');
        document.querySelector('#new-task-time').classList.remove('checked');
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
        const titleValue = document.getElementById('new-task-name').value,
            descriptionValue = document.getElementById('new-task-textarea').value,
            isImportantValue = document.getElementById('new-task-value').checked,
            isUrgentlyValue = document.getElementById('new-task-time').checked;

        if (titleValue) {
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
        } else {
            this.addError();
        }
    }
}
