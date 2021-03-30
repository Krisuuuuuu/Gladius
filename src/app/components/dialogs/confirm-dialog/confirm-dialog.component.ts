import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  text: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {
    this.text = data;
   }

  ngOnInit(): void {
  }

}
