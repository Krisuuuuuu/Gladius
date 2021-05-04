import { Component, Input, OnChanges } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
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
  specialClass: string = '';

  constructor(public dialog: MatDialog, private store: Store<any>) { }

  ngOnChanges(): void {
    this.setColorOfCard();
  }

  openDialog(): void {
    let message: string;

    message = "Do you want to book this activity?";

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: message
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if(result === true){
          const newBooking: IAddBooking = {
            user_email: "mock",
            activity_id: this.activity.id
          };

          this.store.dispatch(calendarActions.newActivityBooked({ booking: newBooking }));
        }
    });
  }

  calculateDuration(): string {
    const startDate: Date = new Date(this.activity.start_hour);
    const endDate: Date = new Date(this.activity.end_hour);

    const result: number = startDate.getTime() - endDate.getTime();
    const resultDate = new Date(result);

    return resultDate.toString();
  }

  setColorOfCard(): void {
    if(this.activity.is_booked_by_me)
      this.specialClass = 'active';
    else if(!this.activity.is_booked_by_me && this.activity.current_bookings_number === this.activity.max_clients)
      this.specialClass = 'locked';
    else
      this.specialClass = '';
  }
}
