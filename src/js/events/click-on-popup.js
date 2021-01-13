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
  }

  toggleCheckbox(e) {
    if (e.target.checked === true) {
      e.target.classList.add('checked');
    } else {
      e.target.classList.remove('checked');
    }
  }

  addPopupEventListener() {
    const closePopupBtn = document.querySelector('#close-popup');
    const closePopupShadow = document.querySelector('#popup-shadow');
    const addTaskBtn = document.querySelector('#add-new-task');
    const checkbox = document.querySelectorAll('.new-task__checkbox');

    closePopupBtn.addEventListener('click', this.closePopup);
    closePopupShadow.addEventListener('click', (e) => {
      if (e.target.id === 'popup-shadow') {
        this.closePopup();
      }
      e.stopPropagation();
    });

    addTaskBtn.addEventListener('click', this.addNewTask);

    checkbox.forEach((input) => {
      input.addEventListener('click', this.toggleCheckbox);
    });
  }

  addNewTask() {
    console.log('success! add new task!');
  }
}
