import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppDataService } from "src/app/services/app-data.service";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import * as importedActions from "../actions/calendar.actions";
import { ToastrService } from "ngx-toastr";
import { of } from "rxjs";

@Injectable()
export class CalendarEffects {

  constructor(
    private actions$:Actions,
    private appDataService: AppDataService,
    private toastr: ToastrService
    ) {}

    getGymInfo$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(importedActions.calendarActions.loadGymInfo),
        mergeMap(({id}) => this.appDataService.getGymInfo(id).pipe(
          tap(() => console.log("rozpocząłem")),
          map(gymInfo => importedActions.calendarActions.gymInfoReceived({ gymInfo })),
          tap(() => console.log("dostałem")),
          catchError(() => {
            this.toastr.error("Loading of gyms info failed");
            return of(importedActions.calendarActions.loadingGymInfoFailed());
          })
        ))
      );
    });

    getCalendarData$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(importedActions.calendarActions.loadCalendarData),
        mergeMap(({ startDate, endDate, gymId }) => this.appDataService.getActivitiesForWeek(startDate, endDate, gymId).pipe(
          tap(() => console.log("rozpocząłem")),
          map(calendarData => importedActions.calendarActions.calendarDataReceived({ calendarData })),
          tap(() => console.log("dostałem")),
          catchError(() => {
            this.toastr.error("Loading of calendar info failed");
            return of(importedActions.calendarActions.loadingCalendarDataFailed());
          })
        ))
      );
    });

    addNewBooking$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(importedActions.calendarActions.newActivityBooked),
        mergeMap(({ booking }) => this.appDataService.postDataToAddBooking(booking).pipe(
          tap(() => this.toastr.success("Activity has been booked successfully")),
          map(() => importedActions.calendarActions.newActivityBookedSuccess()),
          catchError(() => {
            this.toastr.error("Booking a new activity failed");
            return of(importedActions.calendarActions.bookingNewActivityFailed());
          })
        ))
      );
    });
}
