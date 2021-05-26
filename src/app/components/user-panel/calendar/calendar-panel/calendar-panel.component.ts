import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IGymInfo } from 'src/app/model/calendar/IGymInfo';
import { IGym } from 'src/app/model/gym-selection/IGym';
import { calendarActions } from 'src/app/state+/actions/calendar.actions';
import { GymSelectionActions } from 'src/app/state+/actions/gym-selection.actions';
import { CalendarSelectors } from 'src/app/state+/selectors/calendar.selectors';
import { GymSelectionSelectors } from 'src/app/state+/selectors/gym-selection.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-calendar-panel',
  templateUrl: './calendar-panel.component.html',
  styleUrls: ['./calendar-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarPanelComponent implements OnInit, OnDestroy {
  companyName: string = environment.companyName;
  gymInfo: IGymInfo;
  gyms: Array<IGym>;
  currentGym: IGym;
  currentArea: string = '';
  currentActivity: string = '';

  areas: string[] = [];
  areasToDisplay: string[] = [];
  activities: string[] = [];
  activitiesToDisplay: string[] = [];

  private currentAreaSubsription: Subscription;
  private currentActivitySubsription: Subscription;
  private currentGymSubsription: Subscription;
  private gymInfoSubsription: Subscription;
  private gymsSubsription: Subscription;

  constructor(private router: Router, private store: Store<any>) { }

  ngOnInit(): void {
    this.currentGymSubsription = this.store.select(GymSelectionSelectors.selectCurrentGym).subscribe(
      currentGym => this.currentGym = currentGym
    );

    this.gymsSubsription = this.store.select(GymSelectionSelectors.selectGyms).subscribe(
      gyms => {
        if (gyms.length > 0) {
          this.gyms = gyms;

          if (Object.keys(this.currentGym).length > 0) {
            this.store.dispatch(calendarActions.loadGymInfo({ id: this.currentGym.id }));
          }
          else {
            this.store.dispatch(GymSelectionActions.currentGymChanged({ gym: gyms[0] }));
            this.store.dispatch(calendarActions.loadGymInfo({ id: gyms[0].id }));
          }
        }
      }
    );

    this.gymInfoSubsription = this.store.select(CalendarSelectors.selectGymInfo).subscribe(
      gymInfo => {
        if (Object.keys(gymInfo).length > 0) {
          this.gymInfo = gymInfo;
          this.initPanel();
        }
        else {
          this.store.dispatch(GymSelectionActions.loadGyms({ companyName: environment.companyName }));
        }
      }
    );

    this.currentAreaSubsription = this.store.select(CalendarSelectors.selectCurrentArea).subscribe(
      area => this.currentArea = area
    );

    this.currentActivitySubsription = this.store.select(CalendarSelectors.selectCurrentActivity).subscribe(
      activity => this.currentActivity = activity
    );
  }

  ngOnDestroy(): void {
    this.currentAreaSubsription.unsubscribe();
    this.currentActivitySubsription.unsubscribe();
    this.currentGymSubsription.unsubscribe();
    this.gymInfoSubsription.unsubscribe();
    this.gymsSubsription.unsubscribe();
  }

  redirectToGymSelection(): void {
    this.router.navigateByUrl("panel");
  }

  changeCurrentArea(name: string): void {
    this.store.dispatch(calendarActions.currentAreaChanged({ areaName: name }));
    this.customizeActivities();
  }

  changeCurrentActivity(name: string): void {
    this.store.dispatch(calendarActions.currentActivityChanged({ activityName: name }));
  }

  resetPanel(): void {
    if (this.areas.length > 0)
      this.store.dispatch(calendarActions.currentAreaChanged({ areaName: this.areas[0] }));

    if (this.gymInfo.areas[0].activities.length > 0) {
      this.activities = this.gymInfo.areas[0].activities;
      this.store.dispatch(calendarActions.currentActivityChanged({ activityName: this.activities[0] }));
    }
  }

  private initPanel(): void {
    this.areas = this.gymInfo.areas.map(a => a.name);
    this.resetPanel();
  }

  private customizeActivities(): void {
    const index: number = this.areas.indexOf(this.currentArea);
    let activities: string[] = this.gymInfo.areas[index].activities;
    this.activities = activities;
    this.store.dispatch(calendarActions.currentActivityChanged({ activityName: this.activities[0] }));
  }
}
