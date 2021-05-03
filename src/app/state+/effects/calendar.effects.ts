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
        mergeMap(({id}) => this.appDataService.getGymInfo(id).pipe(
          map(gymInfo => importedActions.calendarActions.gymInfoReceived({ gymInfo }))
        ))
      );
    });

    getCalendarData$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(importedActions.calendarActions.loadCalendarData),
        mergeMap(({ startDate, endDate }) => this.appDataService.getActivitiesForWeek(startDate, endDate).pipe(
          map(calendarData => importedActions.calendarActions.calendarDataReceived({ calendarData }))
        ))
      );
    });

    addNewBooking$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(importedActions.calendarActions.newActivityBooked),
        mergeMap(({ booking }) => this.appDataService.postDataToAddBooking(booking).pipe(
          map(() => importedActions.calendarActions.newActivityBookedSuccess())
        ))
      );
    });
}
