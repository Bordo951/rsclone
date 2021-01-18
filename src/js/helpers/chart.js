export default class Chart {

  createChart(per) {
    const pieChart = document.querySelector('.tracker__pie-chart');
    const progressFill = document.querySelector('.tracker__progress-fill');
    const percentVal = document.querySelector('.tracker-percentage');
    const percent = parseInt(per);
    let deg = 360 * percent / 100;

    if (percent > 50) {
      pieChart.classList.add('gt-50');
    }

    progressFill.style.transform = `rotate(${deg}deg)`;
    percentVal.innerHTML = percent + ' %';
  }

}
