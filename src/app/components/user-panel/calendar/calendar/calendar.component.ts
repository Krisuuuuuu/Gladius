import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IActivity } from 'src/app/model/calendar/IActivity';
import { ICalendarData } from 'src/app/model/calendar/ICalendarData';
import { IDateToDisplay } from 'src/app/model/calendar/IDateToDisplay';
import { IGym } from 'src/app/model/gym-selection/IGym';
import { calendarActions } from 'src/app/state+/actions/calendar.actions';
import { CalendarSelectors } from 'src/app/state+/selectors/calendar.selectors';
import { GymSelectionSelectors } from 'src/app/state+/selectors/gym-selection.selectors';

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

  hours: Array<string> = [];
  activities: Array<IActivity> = [];
  startWeekDate: Date;
  endWeekDate: Date;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.getWeekBorder();

    this.store.select(CalendarSelectors.selectCurrentArea).subscribe(
      currentArea => currentArea = currentArea
    );

    this.store.select(CalendarSelectors.selectCurrentActivity).subscribe(
      currentActivity => currentActivity = currentActivity
    );

    this.store.select(GymSelectionSelectors.selectCurrentGym).subscribe(
      currentGym => {
        this.currentGym = currentGym;
        if (Object.keys(currentGym).length > 0)
          this.setOpeningHours();
      }
    );

    this.store.select(CalendarSelectors.selectCalendarData).subscribe(
      calendarData => {
        this.calendarData = calendarData;
        if (Object.keys(calendarData).length > 0) {
          this.activities = this.calendarData.activities;
        }
      }
    );

    this.store.dispatch(calendarActions.loadCalendarData({
      startDate: formatDate(this.startWeekDate, 'yyyy-MM-dd', 'en-US'),
      endDate: formatDate(this.endWeekDate, 'yyyy-MM-dd', 'en-US')}));
  }



  checkIfActivityExists(hour: string, dateToDisplay: IDateToDisplay): boolean {
    if(+hour < 10)
      hour = '0' + hour;

    hour = hour.slice(0, 4).replace('.', ':');

    let date: string = dateToDisplay.date.slice(0, 10);
    let result: boolean = false;

    this.activities = [
      {
        id: "1",
        area: "Squash",
        trainer: "Me",
        name: "First",
        date: "2021-05-10",
        current_bookings_number: 250,
        max_clients: 250,
        start_hour: "08:00",
        end_hour: "10:00",
        is_booked_by_me: false
      },
      {
        id: "1",
        area: "Squash",
        trainer: "Me",
        name: "Third",
        date: "2021-05-11",
        current_bookings_number: 250,
        max_clients: 250,
        start_hour: "08:00",
        end_hour: "10:00",
        is_booked_by_me: true
      },
      {
        id: "1",
        area: "Squash",
        trainer: "Me",
        name: "Second",
        date: "2021-05-12",
        current_bookings_number: 244,
        max_clients: 250,
        start_hour: "08:00",
        end_hour: "10:00",
        is_booked_by_me: true
      },
      {
        id: "1",
        area: "Squash",
        trainer: "Me",
        name: "First",
        date: "2021-05-10",
        current_bookings_number: 244,
        max_clients: 250,
        start_hour: "16:00",
        end_hour: "18:00",
        is_booked_by_me: false
      },
      {
        id: "1",
        area: "Squash",
        trainer: "Me",
        name: "Third",
        date: "2021-05-11",
        current_bookings_number: 244,
        max_clients: 250,
        start_hour: "12:00",
        end_hour: "14:00",
        is_booked_by_me: false
      },
      {
        id: "1",
        area: "Squash",
        trainer: "Me",
        name: "Second",
        date: "2021-05-15",
        current_bookings_number: 244,
        max_clients: 250,
        start_hour: "08:00",
        end_hour: "10:00",
        is_booked_by_me: false
      },
    ]

    if(this.activities.length > 0) {
      let filteredActivities: Array<IActivity> = this.activities.filter(a => a.date.slice(0, 10) == date
        && a.start_hour.slice(0, 4) == hour);
        if(filteredActivities.length > 0)
        result = true;
    }

    return result;
  }

  getActivity(hour: string, dateToDisplay: IDateToDisplay): IActivity {
    if(+hour < 10)
    hour = '0' + hour;

    hour = hour.slice(0,4).replace('.', ':');
    let date: string = dateToDisplay.date.slice(0, 10);

    let filteredActivities: Array<IActivity> = this.activities.filter(a => a.date.slice(0, 10) == date
    && a.start_hour.slice(0,4) == hour);

    return filteredActivities[0];
  }

  private setOpeningHours(): void {
    let allHours: Array<string> = ["6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00"];
    let startHour: number = +(this.currentGym.open_hour.slice(0, 3).replace(':', '.'));
    let endHour: number = +(this.currentGym.close_hour.slice(0, 3).replace(':', '.'));

    for (let i = 0; i < allHours.length; i++) {
      const hour: number = +allHours[i];
      if (hour >= startHour && hour + 2 <= endHour)
        this.hours.push(allHours[i]);
    }
  }

  private getWeekBorder(): void {
    let date: Date = new Date();
    let currentWeekDay = date.getDay();
    let lessDays = currentWeekDay == 0 ? 6 : currentWeekDay - 1;
    this.startWeekDate = new Date(new Date(date).setDate(date.getDate() - lessDays));
    this.endWeekDate = new Date(new Date(this.startWeekDate).setDate(this.startWeekDate.getDate() + 6));
  }
}
