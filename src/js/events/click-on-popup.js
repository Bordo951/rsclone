export default class ClickOnPopup {
  initEvent() {
    const showPopup = document.querySelectorAll('[data-show="popup"]');
    showPopup.forEach((btn) => {
      btn.addEventListener('click', this.showPopup.bind(this));
    });
  }

  showPopup() {
    document.querySelector('#task-popup').classList.remove('hide');
    document.querySelector('#popup-shadow').classList.remove('hide');
    this.addPopupEventListener();
  }

  closePopup() {
    document.querySelector('#task-popup').classList.add('hide');
    document.querySelector('#popup-shadow').classList.add('hide');
    this.removeError();
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
  }

  addPopupEventListener() {
    const closePopupBtn = document.querySelector('#close-popup'),
      closePopupShadow = document.querySelector('#popup-shadow'),
      addTaskBtn = document.querySelector('#add-new-task'),
      checkbox = document.querySelectorAll('.new-task__checkbox'),
      input = document.getElementById('new-task-textarea');

    closePopupBtn.addEventListener('click', this.closePopup.bind(this));
    closePopupShadow.addEventListener('click', (e) => {
      if (e.target.id === 'popup-shadow') {
        this.closePopup();
      }
      e.stopPropagation();
    });

    addTaskBtn.addEventListener('click', this.addNewTask.bind(this));
    checkbox.forEach((input) => {
      input.addEventListener('click', this.toggleCheckbox);
    });
  }

  addNewTask() {
    const titleValue = document.getElementById('new-task-name').value,
      descriptionValue = document.getElementById('new-task-textarea').value,
      isImportantValue = document.getElementById('new-task-value').checked,
      isUrgentlyValue = document.getElementById('new-task-time').checked;

    if (titleValue) {
      let savedTasks = JSON.parse(localStorage.getItem('_tasks')) ?? []; //deserialization
      let taskValue = {
        title: titleValue,
        description: descriptionValue,
        isImportant: isImportantValue,
        isUrgently: isUrgentlyValue,
        isCompleted: false,
      };

      savedTasks.push(taskValue); //pushed
      localStorage.setItem('_tasks', JSON.stringify(savedTasks)); //serialization

      this.clearPopUp();
      this.closePopup();
    } else {
      this.addError();
    }
  }
}
