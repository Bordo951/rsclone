import Chart from "../helpers/chart";
export default class Tracker {
  constructor() {
    this.chart = new Chart();
  }

  init() {
    this.showTrackers(0);
    this.addTrackerEventListener();
  }

  showTrackers(num) {
    let trackerArrs = [];
    let title = '';

    if (!!localStorage.getItem('_trackers')) {
      const storageObj = JSON.parse(localStorage.getItem('_trackers'));

      for (let key in storageObj) {
        trackerArrs.push(storageObj[key]['arr']);
      }

      title = storageObj[`${num}`].title;
    } else {

      for (let i = 0; i < 6; i++) {
        const trackerArr = [];
        for (let j = 0; j < 30; j++) {
          trackerArr.push(0);
        }
        trackerArrs.push(trackerArr);
      }

      title = '30 days ...';

      this.saveTracker(trackerArrs);
    }

    const trackerContainer = document.querySelector('.tracker__checkbox');
    const titleContainer = document.querySelector('.tracker__goal');
    let counter = 0;

    if (trackerContainer && titleContainer) {
      trackerContainer.innerHTML = '';
      titleContainer.innerHTML = title;

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
    }
    
    this.chart.countPercent(counter);
  }

  addTrackerEventListener() {
    const trackerContainer = document.querySelector('.tracker__checkbox');
    const arrows = document.querySelectorAll('.tracker__arrow');
    const titleContainer = document.querySelector('.tracker__goal');
    let memoryName = '30 days ...';

    if (trackerContainer) {
      trackerContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('tracker__day')) {
          e.target.classList.toggle('done');

          const doneDays = document.querySelectorAll('.done').length;
          const days = document.querySelectorAll('.tracker__day');

          this.chart.countPercent(doneDays);
          this.saveTracker(days);
        }
      })
    }

    if (arrows) {
      arrows.forEach((arrow) => {
        arrow.addEventListener('click', (e) => {
          this.changeTracker(e);
        });
      })
    }

    if (titleContainer) {
      titleContainer.onfocus = function () {
        memoryName = titleContainer.innerHTML;
        titleContainer.textContent = '30 days ...';
      }

      titleContainer.onblur = function () {
        if (titleContainer.innerHTML === '') {
          if (memoryName.length < 1) {memoryName = '30 days ...';}
          titleContainer.textContent = memoryName;
        }
        if (titleContainer.innerHTML === '30 days ...' && memoryName !== '30 days ...') {
          titleContainer.innerHTML = memoryName;
        }
      }

      titleContainer.addEventListener('blur', (e) => {
        this.saveTitle(e.target.innerText);
        e.target.blur();
      })
    }
  }

  changeTracker(e) {
    const trackerNumberContainer = document.querySelector('#tracker-num');
    let trackerNumber = parseInt(trackerNumberContainer.innerHTML);

    if (e.target.classList.contains('arrow-left')) {
      if (trackerNumber === 2) {
        e.target.classList.add('inactive');
      }

      if (trackerNumber === 6) {
        document.querySelector('.arrow-right').classList.remove('inactive');
      }

      trackerNumber--;
      trackerNumberContainer.innerHTML = trackerNumber;
    } else {
      if (trackerNumber === 5) {
        e.target.classList.add('inactive');
      }

      if (trackerNumber === 1) {
        document.querySelector('.arrow-left').classList.remove('inactive');
      }
      trackerNumber++;
      trackerNumberContainer.innerHTML = trackerNumber;
    }

    this.showTrackers(trackerNumber - 1);
  }

  saveTracker(arrs) {
    if (!localStorage.getItem('_trackers')) {
      const storageObj = {};

      arrs.forEach((arr, index) => {
        storageObj[`${index}`] = {
          'title': '30 days ...',
          'arr': arr
        }
      })

      localStorage.setItem('_trackers', JSON.stringify(storageObj));
    } else {
      const newArr = [];
      const storageObj = JSON.parse(localStorage.getItem('_trackers'));
      const number = document.querySelector('#tracker-num').innerHTML;

      arrs.forEach((elem) => {
        if (elem.classList.contains('done')) {
          newArr.push(1);
        } else {
          newArr.push(0);
        }
      })

      storageObj[`${parseInt(number) - 1}`]['arr'] = newArr;
      console.log(storageObj);
      localStorage.setItem('_trackers', JSON.stringify(storageObj));
    }
  }

  saveTitle(str) {
    const trackerNumberContainer = document.querySelector('#tracker-num');
    const trackerNumber = parseInt(trackerNumberContainer.innerHTML);

    const storageObj = JSON.parse(localStorage.getItem('_trackers'));

    storageObj[`${trackerNumber - 1}`].title = str;
    console.log(storageObj);
    localStorage.setItem('_trackers', JSON.stringify(storageObj));
  }
}
