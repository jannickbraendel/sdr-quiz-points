import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: "sdr-quiz-points";

  constructor(private dialog: MatDialog) { }

  @ViewChild('startDialog', { read: TemplateRef, static: true }) startDialog: TemplateRef<any>;

  boxCounter = false;
  loadComponent = false;
  boxAmount = 0;

  ngOnInit(): void {
    console.log('OnInit!');
    this.dialog.open(this.startDialog, {
      width: '600px',
      position: { top: '10%', left: '33%' }
    });
  }

  loadCounter(): void {
    this.loadComponent = true;
  }

  onToggleChange(value: String) {
    console.log(value)
    if (value == "boxes") {
      this.boxCounter = true;
    } else {
      this.boxCounter = false;
    }
  }

  boxAmountChanged(event) {
    this.boxAmount = event.target.value;
  }
}
