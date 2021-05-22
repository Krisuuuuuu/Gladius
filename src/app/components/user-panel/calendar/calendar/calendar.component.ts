import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IActivity } from 'src/app/model/calendar/IActivity';
import { ICalendarData } from 'src/app/model/calendar/ICalendarData';
import { IDateToDisplay } from 'src/app/model/calendar/IDateToDisplay';
import { IGymInfo } from 'src/app/model/calendar/IGymInfo';
import { ITileToDisplay } from 'src/app/model/calendar/ITileToDisplay';
import { IGym } from 'src/app/model/gym-selection/IGym';
import { LoaderService } from 'src/app/services/progress-spinner/loader.service';
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
  gymInfo: IGymInfo;

  hours: Array<string> = [];
  activities: Array<IActivity> = [];
  startWeekDate: Date;
  endWeekDate: Date;
  tilesToDisplayBase: Array<ITileToDisplay> = [];
  tilesToDisplay: Array<ITileToDisplay> = [];

  constructor(
    private store: Store<any>
    ) { }

  ngOnInit(): void {
    this.getWeekBorder();

    this.store.select(CalendarSelectors.selectGymInfo).subscribe(
      gymInfo => this.gymInfo = gymInfo
    );

    this.store.select(CalendarSelectors.selectCurrentArea).subscribe(
      currentArea => {
        this.currentArea = currentArea;
      }
    );

    this.store.select(CalendarSelectors.selectCurrentActivity).subscribe(
      currentActivity => {
        this.currentActivity = currentActivity;

        // if(currentActivity !== undefined)
        //   this.filterActivities();
      }
    );

    this.store.select(CalendarSelectors.selectCalendarData).subscribe(
      calendarData => {
        this.store.select(GymSelectionSelectors.selectCurrentGym).subscribe(
          currentGym => {
            this.currentGym = currentGym;
            if (Object.keys(currentGym).length > 0) {
              this.setOpeningHours();
            }
          }
        );

        this.calendarData = calendarData;
        if (Object.keys(calendarData).length > 0) {
          this.getTiles();
        }
      }
    );

    this.store.select(GymSelectionSelectors.selectCurrentGym).subscribe(
      currentGym => {
        this.currentGym = currentGym;
        if (Object.keys(currentGym).length > 0){
          this.setOpeningHours();
        }
      }
    );

    this.store.select(CalendarSelectors.selectCalendarData).subscribe(
      calendarData => {
        this.calendarData = calendarData;
        if (Object.keys(calendarData).length > 0) {
          this.getTiles();
        }
      }
    );

    this.store.dispatch(calendarActions.loadCalendarData({
      startDate: formatDate(this.startWeekDate, 'yyyy-MM-dd', 'en-US'),
      endDate: formatDate(this.endWeekDate, 'yyyy-MM-dd', 'en-US')}));
  }

  getTiles(): void {
    this.activities = [...this.calendarData.activities];

    this.tilesToDisplay = [];

    for (let i = 0; i < this.hours.length; i++) {
      this.tilesToDisplay.push(
        {
          hour: this.hours[i],
          activities: []
        }
      );

      for (let j = 0; j < this.calendarData.display_dates.length; j++) {
        let activity: IActivity = this.getActivity(this.hours[i], this.calendarData.display_dates[j]);
        this.tilesToDisplay[i].activities.push(activity);
      }
    }
    debugger
  }

  getActivity(hour: string, dateToDisplay: IDateToDisplay): IActivity {
    if (+hour < 10)
      hour = '0' + hour;

    hour = hour.slice(0, 4).replace('.', ':');
    let date: string = dateToDisplay.date.slice(0, 10);

    let filteredActivities: Array<IActivity> = this.activities.filter(a => a.date.slice(0, 10) == date
      && a.start_hour.slice(0, 4) == hour);

    return filteredActivities[0];
  }

  getAnotherWeek(previous: boolean): void {
    let dates: Array<Date>;

    if (previous)
      dates = this.getPreviousWeek();
    else
      dates = this.getNextWeek();

    this.store.dispatch(calendarActions.loadCalendarData({
      startDate: formatDate(dates[0], 'yyyy-MM-dd', 'en-US'),
      endDate: formatDate(dates[1], 'yyyy-MM-dd', 'en-US')
    }));
  }

  private filterActivities(): void {
    this.tilesToDisplay = JSON.parse(JSON.stringify(this.tilesToDisplay));

    if(this.tilesToDisplay.length === 0)
      return;

    for (let i = 0; i < this.hours.length; i++) {

      for (let j = 0; j < this.calendarData.display_dates.length; j++) {

        if(this.tilesToDisplayBase[i].activities[j] !== undefined) {
          if(this.tilesToDisplayBase[i].activities[j].name === this.currentActivity)
              continue;
          else{
            console.log(this.tilesToDisplayBase[i].activities[j]);
            console.log(this.tilesToDisplay[i].activities[j]);
            console.log(this.currentActivity);
            console.log(this.tilesToDisplayBase[i].activities[j].name === this.currentActivity);
            this.tilesToDisplay[i].activities[j] = undefined;
          }
        }
      }
    }
  }

  private setOpeningHours(): void {
    this.hours = [];
    let allHours: Array<string> = ["6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00"];
    let startHour: number = +(this.currentGym.open_hour.slice(0, 4).replace(':', '.'));
    let endHour: number = +(this.currentGym.close_hour.slice(0, 4).replace(':', '.'));

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

  private getPreviousWeek(): Array<Date> {
    let date: Date = new Date(this.calendarData.display_dates[0].date);
    let startDate: Date = new Date(new Date(date).setDate(date.getDate() - 7));
    let endDate: Date = new Date(new Date(date).setDate(date.getDate() - 1));

    return [startDate, endDate];
  }

  private getNextWeek(): Array<Date> {
    let date: Date = new Date(this.calendarData.display_dates[6].date);
    let startDate: Date = new Date(new Date(date).setDate(date.getDate() + 1));
    let endDate: Date = new Date(new Date(date).setDate(date.getDate() + 7));

    return [startDate, endDate];
  }
}
