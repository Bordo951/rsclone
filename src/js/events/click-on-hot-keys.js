import ClickOnPopup from '../events/click-on-popup';

export default class ClickHotKeys {
  constructor() {
    this.clickOnPopup = new ClickOnPopup();
  }

  initEvent() {
    this.hotKeys();
  }

  hotKeys() {
    const clickOnPopup = this.clickOnPopup;
    document.addEventListener('keydown', function (e) {
      if (
        (e.shiftKey && e.keyCode === 79) ||
        (e.shiftKey && e.keyCode === 107) ||
        (e.shiftKey && e.keyCode === 192) ||
        (e.ctrlKey && e.keyCode === 77)
      ) {
        clickOnPopup.showPopup();
      }
    });
  }
}
