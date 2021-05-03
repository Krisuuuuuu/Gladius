import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IActivity } from 'src/app/model/calendar/IActivity';
import { IActivityInfo } from 'src/app/model/calendar/IActivityInfo';
import { IGymInfo } from 'src/app/model/calendar/IGymInfo';
import { IGym } from 'src/app/model/gym-selection/IGym';
import { calendarActions } from 'src/app/state+/actions/calendar.actions';
import { CalendarSelectors } from 'src/app/state+/selectors/calendar.selectors';
import { GymSelectionSelectors } from 'src/app/state+/selectors/gym-selection.selectors';

@Component({
  selector: 'app-calendar-panel',
  templateUrl: './calendar-panel.component.html',
  styleUrls: ['./calendar-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarPanelComponent implements OnInit {
  gymInfo: IGymInfo;
  currentGym: IGym;
  currentArea: string;
  currentActivity: string;
  currentTrainer: string;

  areas: string[] = ["Gym", "Cardio", "Fitness", "Squash", "Badminton", "Football Pitch"];
  activities: string[] = ["Classes 1", "Classes 2", "Classes 3"];
  trainers: string[] = ["Trainer 1", "Trainer 2", "Trainer 3"];

  constructor(private router: Router, private store: Store<any>) {}

  ngOnInit(): void {
    this.store.select(GymSelectionSelectors.selectCurrentGym).subscribe(
      currentGym => this.currentGym = currentGym
    );

    const id: string = this.currentGym !== null ? this.currentGym.id : '';
    this.store.dispatch(calendarActions.loadGymInfo({ id: id }));

    this.store.select(CalendarSelectors.selectGymInfo).subscribe(
      gymInfo => {
        this.gymInfo = gymInfo;
        this.initPanel();
      }
    );

    this.store.select(CalendarSelectors.selectCurrentArea).subscribe(
      area => {
        this.currentArea = area;
        this.changeCurrentArea(area)
      }
    );

    this.store.select(CalendarSelectors.selectCurrentActivity).subscribe(
      activity => {
        this.currentActivity = activity;
        this.changeCurrentActivity(activity);
      }
    );

    this.store.select(CalendarSelectors.selectCurrentTrainer).subscribe(
      trainer => {
        this.currentTrainer = trainer;
        this.changeCurrentTrainer(trainer);
      }
    );
  }

  redirectToGymSelection(): void {
    this.router.navigateByUrl("panel");
  }

  private initPanel(): void {
    this.changeCurrentArea(this.gymInfo.areas[0].name);
    this.changeCurrentActivity(this.gymInfo.areas[0].name);
    this.changeCurrentTrainer(this.gymInfo.areas[0].activities[0].trainers[0]);
  }

  changeCurrentArea(area: string): void {
    if(this.gymInfo.areas != undefined && this.gymInfo.areas.length > 0) {
      this.areas = this.gymInfo.areas.map(a => a.name);
      const areaIndex: number = this.areas.indexOf(area);
      this.store.dispatch(calendarActions.currentAreaChanged({ areaName: this.areas[areaIndex] }));
      this.store.dispatch(calendarActions.currentActivityChanged({ activityName: this.gymInfo.areas[areaIndex]
        .activities[0].name }));
      this.store.dispatch(calendarActions.currentTrainerChanged({ trainerName: this.gymInfo.areas[areaIndex]
        .activities[0].trainers[0] }));
    }
  }

  changeCurrentActivity(activity: string): void {
    const areaIndex: number = this.areas.indexOf(this.currentArea);
    const activities: Array<IActivityInfo> = this.gymInfo.areas[areaIndex].activities;
    const activityIndex: number = activities.map(a => a.name).indexOf(activity);

    if(activities !== undefined && activities.length > 0){
      this.activities = activities.map(a => a.name);
      this.store.dispatch(calendarActions.currentActivityChanged({ activityName: this.activities[activityIndex] }));
      this.store.dispatch(calendarActions.currentTrainerChanged({ trainerName: this.gymInfo.areas[areaIndex]
        .activities[activityIndex].trainers[0] }));
    }
  }

  changeCurrentTrainer(trainer: string): void {
    const areaIndex: number = this.areas.indexOf(this.currentArea);
    const activityIndex: number = this.activities.indexOf(this.currentActivity);
    const trainers: Array<string> = this.gymInfo.areas[areaIndex].activities[activityIndex].trainers;
    const trainerIndex = trainer.indexOf(trainer);

    if(trainers !== undefined && trainers.length > 0) {
      this.trainers = trainers;
      this.store.dispatch(calendarActions.currentTrainerChanged({ trainerName: this.trainers[trainerIndex] }));
    }
  }
}
