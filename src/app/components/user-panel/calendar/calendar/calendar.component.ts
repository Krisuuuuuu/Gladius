import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IActivity } from 'src/app/model/calendar/IActivity';
import { ICalendarData } from 'src/app/model/calendar/ICalendarData';
import { IGym } from 'src/app/model/gym-selection/IGym';
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
  currentTrainer: string;

  hours: Array<string> = [];
  activities: Array<IActivity> = [];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select(GymSelectionSelectors.selectCurrentGym).subscribe(
      currentGym => {
        this.currentGym = currentGym;
        this.setOpeningHours();
      }
    );

    this.store.select(CalendarSelectors.selectCalendarData).subscribe(
      calendarData => this.calendarData = calendarData
    );

    this.store.select(CalendarSelectors.selectCurrentArea).subscribe(
      currentArea => {
        this.currentArea = currentArea;
        this.filterActivities();
      }
    );

    this.store.select(CalendarSelectors.selectCurrentActivity).subscribe(
      currentActivity => {
        this.currentActivity = currentActivity;
        this.filterActivities();
      }
    );

    this.store.select(CalendarSelectors.selectCurrentTrainer).subscribe(
      currentTrainer => {
        this.currentTrainer = currentTrainer;
        this.filterActivities();
      }
    );
  }

  private setOpeningHours(): void {
    let allHours: Array<string>  = ["6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00"];
    let startHour: number = +this.currentGym.open_hour;
    let endHour: number = +this.currentGym.close_hour;

    for (let i = 0; i < allHours.length; i++) {
      const hour: number = +allHours[i];
      if(hour >= startHour && hour <= endHour)
        this.hours.push(allHours[i]);
    }
  }

  private filterActivities(): void {
    let activities: Array<IActivity> = { ...this.calendarData.activities };
    activities = activities.filter(a => a.area === this.currentArea && a.name === this.currentActivity && a.trainer === this.currentTrainer);
    this.activities = activities;
  }
}
