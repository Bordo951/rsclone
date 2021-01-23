import Tracker from "../helpers/tracker";

export default class TrackerInitializer {
  constructor() {
    this.tracker = new Tracker();
  }

  init() {
    if (!!document.querySelector('.tracker')) {
      this.tracker.init();
    }
  }
}
