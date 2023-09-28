import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent {

  constructor(private dialog: MatDialog) { }

  maxPoints = 0;

  @ViewChild('boxDialog', { read: TemplateRef, static: true }) boxDialog: TemplateRef<any>;

  ngOnInit() {
    this.dialog.open(this.boxDialog);
  }

  loadBoxes(amount: string) {
    console.log('start Quiz');
    this.maxPoints = parseInt(amount);
  }
}
