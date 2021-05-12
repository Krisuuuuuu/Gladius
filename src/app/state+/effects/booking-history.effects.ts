import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppDataService } from "src/app/services/app-data.service";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import * as importedActions from "../actions/booking-history.actions";
import { ToastrService } from "ngx-toastr";
import { of } from "rxjs";

@Injectable()
export class BookingHistoryEffects {

  constructor(
    private actions$:Actions,
    private appDataService: AppDataService,
    private toastr: ToastrService
    ) {}

  getAllBookingHistory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(importedActions.BookingHistoryActions.loadBookingHistory),
      mergeMap(() => this.appDataService.getBookingsHistory().pipe(
        map(bookingHistory => importedActions.BookingHistoryActions.bookingHistoryReceived({ bookingHistory })),
        catchError(() => {
          this.toastr.error("Loading of booking history failed.");
          return of(importedActions.BookingHistoryActions.loadingBookingHistoryFailed());
        })
      ))
    );
  });

  deleteBookingFromHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(importedActions.BookingHistoryActions.deleteBooking),
        mergeMap(({ booking }) => this.appDataService.postDataToRemoveBooking(booking).pipe(
          tap(() => this.toastr.success("Reservation has been cancelled successfully")),
          map(() => importedActions.BookingHistoryActions.deletingBookingSuccess()),
          catchError(() => {
            this.toastr.error("Reservation canceling failed.");
            return of(importedActions.BookingHistoryActions.loadingBookingHistoryFailed());
          })
        ))
    ),
    { dispatch: false }
  )
}
