import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public width = 0;
  private interval;
  private timeout;
  public secondsLeft = 0;
  public msg = 'Timer';
  public counting = false;

  constructor() {
  }

  startCounter(to: number = 10) {
    // console.log(to);
    this.counting = true;
    this.width = 0;
    this.msg = '';
    const toInMilis = to * 1000;
    this.secondsLeft = to;
    const addToWidth = 300 / to;
    // console.log('addToWidth', addToWidth);
    this.interval = setInterval(() => {
      this.width = this.width + addToWidth;
      this.secondsLeft--;
    }, 1000);
    this.timeout = setTimeout(() => {
      clearInterval(this.interval);
      this.msg = 'Done!!';
      this.counting = false;
    }, toInMilis);
  }

  stopCounter() {
    if (this.interval) {clearInterval(this.interval); }
    if (this.timeout) {clearTimeout(this.timeout); }
    this.counting = false;
    this.msg = 'Stoped';
  }

  resetTimer() {
    if (this.interval) {clearInterval(this.interval); }
    if (this.timeout) {clearTimeout(this.timeout); }
    this.counting = false;
    this.msg = 'Canceled';
    this.width = 0;
    this.secondsLeft = 0;
  }
}
