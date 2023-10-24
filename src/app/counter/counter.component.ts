import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  leftCounter = 0;
  rightCounter = 0;

  addLeft() {
    this.leftCounter++;
  }

  subLeft() {
    if (this.leftCounter != 0) {
      this.leftCounter--;
    }
  }

  addRight() {
    this.rightCounter++;
  }

  subRight() {
    if (this.rightCounter != 0) {
      this.rightCounter--;
    }
  }

  resetScore() {
    this.leftCounter = 0;
    this.rightCounter = 0;
  }
}
