import Chart from "../helpers/chart";

export default class TrackerInitializer {
  constructor() {
    this.chart = new Chart();
  }

  init() {
    this.showTrackers(0);
    this.showChart();
  }

  showChart() {
    const percentages = document.querySelector('.tracker__pie-chart').getAttribute('data-percent');
    this.chart.createChart(percentages);
  }

  showTrackers(num) {
    let trackerArrs = [];

    if (!!localStorage.getItem('_trackers')) {
      trackerArrs = JSON.parse(localStorage.getItem('_tracker'));
    } else {
      for (let i = 0; i < 6; i++) {
        const trackerArr = [];
        for (let j = 0; j < 30; j++) {
          trackerArr.push(0);
        }
        trackerArrs.push(trackerArr);
      }
    }

    const trackerContainer = document.querySelector('.tracker__checkbox');
    trackerContainer.innerHTML = '';

    trackerArrs[num].forEach((elem) => {
      const div = document.createElement('div');
      if (elem) {
        div.className = 'tracker__day done';
      } else {
        div.className = 'tracker__day';
      }
      trackerContainer.append(div);
    })
  }
}
