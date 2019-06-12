import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-bar-box',
  templateUrl: './bar-box.component.html',
  styleUrls: ['./bar-box.component.scss']
})
export class BarBoxComponent {
  public countTo = 5;

  constructor(public counerService: CounterService) { }

  start() {
    if (this.counerService.counting) {
      this.counerService.stopCounter();
    } else {
      this.counerService.startCounter(this.countTo);
    }
  }

}
