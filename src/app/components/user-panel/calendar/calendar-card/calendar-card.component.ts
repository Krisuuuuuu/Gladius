import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';
import { IActivity } from 'src/app/model/calendar/IActivity';
import { IAddBooking } from 'src/app/model/calendar/IAddBooking';
import { IAreaInfo } from 'src/app/model/calendar/IAreaInfo';
import { calendarActions } from 'src/app/state+/actions/calendar.actions';
import { CalendarSelectors } from 'src/app/state+/selectors/calendar.selectors';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss']
})
export class CalendarCardComponent implements OnInit, OnChanges {
  @Input() activity: IActivity;
  @Input() visible: boolean;

  areas: Array<IAreaInfo>;
  currentArea: string = '';
  specialClass: string = '';

  constructor(public dialog: MatDialog, private store: Store<any>) {}

  ngOnInit(): void {
    this.store.select(CalendarSelectors.selectGymInfo).subscribe(
      gymInfo => this.areas = gymInfo.areas
    );

    this.store.select(CalendarSelectors.selectCurrentArea).subscribe(
      area => this.currentArea = area
    );
  }

  ngOnChanges(): void {
    if(this.visible)
      this.setColorOfCard();
    else
      this.specialClass = 'unvisible';
  }

  setColorOfCard(): void {
    if(this.activity.is_booked_by_me)
      this.specialClass = 'active';
    else if(this.activity.current_bookings_number === this.activity.max_clients)
      this.specialClass = 'locked';
    else
      this.specialClass = '';
  }

  createNewBooking(): void {
    if(this.specialClass === 'active' || this.specialClass === 'locked' || !this.visible)
      return;

    let message: string;

    message = "Do you want to book this activity?";

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: message
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result === true) {
          let index: number = this.areas.findIndex(a => a.name === this.currentArea);
          let area: IAreaInfo = this.areas[index];

          const newBooking: IAddBooking = {
            activity_id: this.activity.id,
            area_id: area.id,
          };

          this.store.dispatch(calendarActions.newActivityBooked({ booking: newBooking }));
        }
      });
  }
}
