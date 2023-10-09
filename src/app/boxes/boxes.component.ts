import { Component, ViewChild, TemplateRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent {

  boxFilledArray;

  //between 1 and 9
  @Input('boxAmount') boxAmount = 1;

  ngOnInit(): void {
    console.log(this.boxAmount);
    this.initBoxArray();
  }

  initBoxArray(): void {
    this.boxFilledArray = new Array();
    for (let i = 0; i < this.boxAmount; i++) {
      this.boxFilledArray.push(false);
    }
    console.log(this.boxFilledArray);
  }

  switchBoxState(index: number): void {
    if (this.boxFilledArray[index]) {
      this.boxFilledArray[index] = false;
    } else {
      this.boxFilledArray[index] = true;
    }
    console.log(this.boxFilledArray);
  }
}
