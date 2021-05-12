import { createAction, props } from "@ngrx/store";
import { IBooking } from "src/app/model/booking-history/IBooking";
import { IDeleteBooking } from "src/app/model/booking-history/IDeleteBooking";

const loadBookingHistory = createAction(
  '[Booking History] Load booking history',
);

const bookingHistoryReceived = createAction(
  '[Booking History] List of booking history received',
  props<{ bookingHistory: Array<IBooking> }>()
);

const loadingBookingHistoryFailed = createAction(
  '[Booking History] Loading of booking history failed',
);

const deleteBooking = createAction(
  '[Booking History] Delete booking',
  props<{ booking: IDeleteBooking }>()
);

const deletingBookingSuccess = createAction(
  '[Booking History] Deleting booking success'
);

const deletingBookingFailed = createAction(
  '[Booking History] Deleting booking failed'
);

const updateDisplayedData = createAction(
  '[Booking History] Update displayed data',
  props<{ displayedBookingHistory: Array<IBooking> }>()
);

export const BookingHistoryActions = {
  loadBookingHistory,
  bookingHistoryReceived,
  loadingBookingHistoryFailed,
  deleteBooking,
  deletingBookingSuccess,
  deletingBookingFailed,
  updateDisplayedData,
};
