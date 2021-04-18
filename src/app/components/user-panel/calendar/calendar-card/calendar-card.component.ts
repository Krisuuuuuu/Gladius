import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss']
})
export class CalendarCardComponent implements OnInit {
  isBooked: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    let message: string;

    this.isBooked == true ? message = "Do you want to cancell your reservation?" : message = "Do you want to book this classes?";

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: message
    });


    dialogRef.afterClosed().subscribe(
      result => {

    });
  }
}
