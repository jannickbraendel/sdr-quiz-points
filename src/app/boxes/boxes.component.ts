import { Component, ViewChild, TemplateRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent {

  boxFilledArrayLeft: Array<boolean>;
  boxFilledArrayRight: Array<boolean>;

  //between 1 and 9
  @Input('boxAmount') boxAmount = 1;

  ngOnInit(): void {
    console.log(this.boxAmount);
    this.initBoxArray();
  }

  initBoxArray(): void {
    this.boxFilledArrayLeft = new Array();
    this.boxFilledArrayRight = new Array();
    for (let i = 0; i < this.boxAmount; i++) {
      this.boxFilledArrayLeft.push(false);
      this.boxFilledArrayRight.push(false);
    }
    //console.log(this.boxFilledArrayLeft);
  }

  switchBoxState(side: string, index: number): void {

    if (side == 'left') {
      if (this.boxFilledArrayLeft[index]) {
        this.boxFilledArrayLeft[index] = false;
      } else {
        this.boxFilledArrayLeft[index] = true;
      }
    } else {
      if (this.boxFilledArrayRight[index]) {
        this.boxFilledArrayRight[index] = false;
      } else {
        this.boxFilledArrayRight[index] = true;
      }
    }
  }

  /*resetBoxes(side: string): void {
    if (side == 'left') {
      this.boxFilledArrayLeft.forEach(box => {
        if (box == true) { box = false; }
      });
    } else {
      this.boxFilledArrayRight.forEach(box => {
        box = false;
      });
    }
  }*/
}
