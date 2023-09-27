import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog) { }

  @ViewChild('startDialog', { read: TemplateRef, static: true }) startDialog: TemplateRef<any>;

  boxCounter = false;
  loadComponent = false;

  ngOnInit(): void {
    console.log('OnInit!');
    this.dialog.open(this.startDialog, {
      width: '500px',
      position: { top: '200px', left: '40%' }
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
}
