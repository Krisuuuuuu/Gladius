import { Component, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';
import { IActivity } from 'src/app/model/calendar/IActivity';
import { IAddBooking } from 'src/app/model/calendar/IAddBooking';
import { calendarActions } from 'src/app/state+/actions/calendar.actions';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss']
})
export class CalendarCardComponent implements OnChanges {
  @Input() activity: IActivity;
  @Input() visible: boolean;

  specialClass: string = '';

  constructor(public dialog: MatDialog, private store: Store<any>) {}

  ngOnChanges(): void {
    if(this.visible)
      this.setColorOfCard();
  }

  setColorOfCard(): void {
    if(this.activity.is_booked_by_me)
      this.specialClass = 'active';
    else if(this.activity.current_bookings_number === this.activity.max_clients)
      this.specialClass = 'locked';
    else
      this.specialClass = '';
  }

  createNewBooking(activity: IActivity): void {
    if(this.specialClass === 'active' || this.specialClass === 'locked')
      return;

    let message: string;

    message = "Do you want to book this activity?";

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: message
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result === true) {
          const newBooking: IAddBooking = {
            activity_id: activity.id,
            area_id: ''
          };

          this.store.dispatch(calendarActions.newActivityBooked({ booking: newBooking }));
        }
      });
  }
}
