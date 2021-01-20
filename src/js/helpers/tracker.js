import Chart from "../helpers/chart";
export default class Tracker {
  constructor() {
    this.chart = new Chart();
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
    let counter = 0;

    trackerContainer.innerHTML = '';

    trackerArrs[num].forEach((elem) => {
      const div = document.createElement('div');
      if (elem) {
        div.className = 'tracker__day done';
        counter++;
      } else {
        div.className = 'tracker__day';
      }
      trackerContainer.append(div);
    })

    this.chart.createChart(counter);
    this.addTrackerEventListener();
  }

  addTrackerEventListener() {
    const trackerContainer = document.querySelector('.tracker__checkbox');
    trackerContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('tracker__day')) {
        e.target.classList.toggle('done');
        const doneDays = document.querySelectorAll('.done').length;
        this.chart.countPercent(doneDays);
      }
    })
  }
}
