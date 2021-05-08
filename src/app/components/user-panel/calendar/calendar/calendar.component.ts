import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';
import { IActivity } from 'src/app/model/calendar/IActivity';
import { IAddBooking } from 'src/app/model/calendar/IAddBooking';
import { ICalendarData } from 'src/app/model/calendar/ICalendarData';
import { IGym } from 'src/app/model/gym-selection/IGym';
import { calendarActions } from 'src/app/state+/actions/calendar.actions';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  currentGym: IGym;
  calendarData: ICalendarData;
  currentArea: string;
  currentActivity: string;
  currentTrainer: string;

  hours: Array<string> = [];
  activities: Array<IActivity> = [];

  constructor(public dialog: MatDialog, private store: Store<any>) { }

  ngOnInit(): void {

  }

  createNewBooking(activity: IActivity): void {
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
            activity_id: activity.id
          };

          this.store.dispatch(calendarActions.newActivityBooked({ booking: newBooking }));
        }
    });
  }

  private setOpeningHours(): void {
    let allHours: Array<string>  = ["6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00"];
    let startHour: number = +this.currentGym.open_hour;
    let endHour: number = +this.currentGym.close_hour;

    for (let i = 0; i < allHours.length; i++) {
      const hour: number = +allHours[i];
      if(hour >= startHour && hour + 2 <= endHour)
        this.hours.push(allHours[i]);
    }
  }
}
