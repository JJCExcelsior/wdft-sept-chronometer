class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentMilTime = 0;
    this.intervalId = 0;
    this.milIntervalId = 0;
  }
  startClick(callback, callback2) {
     this.intervalId = setInterval(() => {
          this.currentTime++;
          if (callback) {
            callback()
          }
      }, 1000)

    this.milIntervalId = setInterval(() => {
        this.currentMilTime++;
        if (callback2) {
          callback2()
        }
    }, 1)


  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return this.currentTime % 60
  }
  twoDigitsNumber(num) {
      return ("0" + num).slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.milIntervalId)
  }
  resetClick() {
    this.currentTime = 0
    this.currentMilTime = 0
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    let mil = this.twoDigitsNumber(this.currentMilTime);
      return `${min}:${sec}:${mil}`;
  }
}


