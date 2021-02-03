import ClickOnPopup from '../events/click-on-popup';
import TaskManager from '../helpers/task-manager';

export default class ClickHotKeys {
  constructor() {
    this.clickOnPopup = new ClickOnPopup();
    this.taskManager = new TaskManager();
  }

  initEvent() {
    this.initShowPopupHotKey();
    this.initToAnotherPage();
    this.initDeleteAllTasks();
    this.initClosePopUp();
  }

  initShowPopupHotKey() {
    const clickOnPopup = this.clickOnPopup;
    document.addEventListener('keydown', function (e) {
      if (
        (window.location.pathname === '/' ||
          window.location.pathname === '/index.html') &&
        ((e.ctrlKey && e.shiftKey && e.keyCode === 107) ||
            (e.ctrlKey && e.shiftKey && e.keyCode === 187))
      ) {
        clickOnPopup.showPopup();
      }
    });
  }

  initToAnotherPage() {
    document.addEventListener('keydown', function (e) {
      if (e.ctrlKey && e.shiftKey && e.keyCode === 65) {
        window.location.href = './about.html';
      } else if (e.ctrlKey && e.shiftKey && e.keyCode === 83) {
        window.location.href = './settings.html';
      } else if (e.ctrlKey && e.shiftKey && e.keyCode === 72) {
        window.location.href = './index.html';
      }
    });
  }

  initClosePopUp() {
    const clickOnPopup = this.clickOnPopup;
    document.addEventListener('keydown', function (e) {
      if (e.ctrlKey && e.shiftKey && e.keyCode === 13) clickOnPopup.addNewTask();
    });
  }

  initDeleteAllTasks() {
    document.addEventListener(
      'keydown',
      function (e) {
        if (e.ctrlKey && e.shiftKey && e.keyCode === 46) {
          this.taskManager.removingAllTasksWithConfirmed();
        }
      }.bind(this)
    );
  }
}
