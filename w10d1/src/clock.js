class Clock {
  constructor(){
    this.date = new Date();
    this.seconds = this.date.getSeconds();
    this.minutes = this.date.getMinutes();
    this.hours = this.date.getHours();
    this.tick();
  }

  tick(){
    let that = this;
    setInterval( () => {
      that.seconds += 1;
      if (that.seconds > 59){
        that.minutes += 1;
        that.seconds = 0;
      } 
      if (that.minutes > 59){
        that.hours += 1;
        that.minutes = 0;
      } 
      if (that.hours > 23){
        that.hours = 0;
      } 
    that.changeClockDisplay();
    } ,1000);
  }

  changeClockDisplay(){
    const clockEle = document.getElementById('clock');
    clockEle.innerHTML = `${this.hours}:${this.minutes}:${this.seconds}`;
  }
}


module.exports = Clock;