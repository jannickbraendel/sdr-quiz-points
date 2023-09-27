import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  leftCounter = 0;
  rightCounter = 0;

  clickLeft() {
    this.leftCounter++;
  }

  clickRight() {
    this.rightCounter++;
  }

  resetScore() {
    this.leftCounter = 0;
    this.rightCounter = 0;
  }
}
