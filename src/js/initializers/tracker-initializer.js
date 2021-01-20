import Chart from "../helpers/chart";
import Tracker from "../helpers/tracker";

export default class TrackerInitializer {
  constructor() {
    this.chart = new Chart();
    this.tracker = new Tracker();
  }

  init() {
    this.tracker.showTrackers(0);
    this.showChart();
  }

  showChart() {
    const percentages = document.querySelector('.tracker__pie-chart').getAttribute('data-percent');
    this.chart.createChart(percentages);
  }
}
