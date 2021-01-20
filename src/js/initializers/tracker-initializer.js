import Tracker from "../helpers/tracker";

export default class TrackerInitializer {
  constructor() {
    this.tracker = new Tracker();
  }

  init() {
    this.tracker.showTrackers(0);
  }
}
