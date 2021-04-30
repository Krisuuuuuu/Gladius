import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppDataService } from "src/app/services/app-data.service";
import { mergeMap, map } from "rxjs/operators";
import * as importedActions from "../actions/booking-history.actions";

@Injectable()
export class BookingHistoryEffects {

  constructor(private actions$:Actions,
    private appDataService: AppDataService) {}

  getAllBookingHistory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(importedActions.BookingHistoryActions.loadBookingHistory),
      mergeMap(({ email }) => this.appDataService.getBookingsHistory(email).pipe(
        map(bookingHistory => importedActions.BookingHistoryActions.bookingHistoryReceived({ bookingHistory }))
      ))
    );
  });

  deleteBookingFromHistory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(importedActions.BookingHistoryActions.deleteBooking),
        mergeMap(({ booking }) => this.appDataService.postDataToRemoveBooking(booking).pipe(
          map(() => importedActions.BookingHistoryActions.deleteBookingSuccess())
        ))
    );
  });
}
