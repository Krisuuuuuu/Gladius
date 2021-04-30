import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppDataService } from "src/app/services/app-data.service";
import { mergeMap, map } from "rxjs/operators";
import * as importedActions from "../actions/calendar.actions";

@Injectable()
export class CalendarEffects {

  constructor(private actions$:Actions,
    private appDataService: AppDataService) {}

    getGymInfo$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(importedActions.calendarActions.loadGymInfo),
        mergeMap(() => this.appDataService.getGymInfo("1").pipe(
          map(gymInfo => importedActions.calendarActions.gymInfoReceived({ gymInfo }))
        ))
      );
    });

    getCalendarData$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(importedActions.calendarActions.loadCalendarData),
        mergeMap(() => this.appDataService.getActivitiesForWeek("test", "test").pipe(
          map(calendarData => importedActions.calendarActions.calendarDataReceived({ calendarData }))
        ))
      );
    });
}
