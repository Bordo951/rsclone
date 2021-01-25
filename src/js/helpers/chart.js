export default class Chart {

  createChart(per) {
    const pieChart = document.querySelector('.tracker__pie-chart');
    const progressFill = document.querySelector('.tracker__progress-fill');
    const percentVal = document.querySelector('.tracker-percentage');
    const percent = parseInt(per);
    let deg = 360 * percent / 100;

    if (pieChart && percent > 50) {
      pieChart.classList.add('gt-50');
    } else {
      pieChart.classList.remove('gt-50');
    }

    if (progressFill && percentVal) {
      progressFill.style.transform = `rotate(${deg}deg)`;
      percentVal.innerHTML = percent + ' %';
    }
  }

  countPercent(num = 0) {
    // this.createChart(0);
    const DAYS = 30;
    const percent = Math.round(num * 100 / DAYS);
    this.createChart(percent);
  }
}
