import Chart from "../helpers/chart";

export default class TrackerInitializer {
  constructor() {
    this.chart = new Chart();
  }

  init() {
    this.showTrackers();
    this.showChart();
  }

  showChart() {
    const percentages = document.querySelector('.tracker__pie-chart').getAttribute('data-percent');
    this.chart.createChart(percentages);
  }

  showTrackers() {
    console.log('tracker');
  }
}
