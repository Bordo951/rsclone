import ClickOnPopup from '../events/click-on-popup';

export default class ClickHotKeys {
  constructor() {
    this.clickOnPopup = new ClickOnPopup();
  }

  initEvent() {
    this.initShowPopupHotKey();
  }

  initShowPopupHotKey() {
    const clickOnPopup = this.clickOnPopup;
    document.addEventListener('keydown', function (e) {
      if (e.shiftKey && e.keyCode === 107) clickOnPopup.showPopup();
    });
  }
}
