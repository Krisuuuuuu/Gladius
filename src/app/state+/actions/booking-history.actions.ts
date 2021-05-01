import { createAction, props } from "@ngrx/store";
import { IBooking } from "src/app/model/booking-history/IBooking";
import { IDeleteBooking } from "src/app/model/booking-history/IDeleteBooking";

const loadBookingHistory = createAction(
  '[Booking History] Load booking history',
  props<{ email: string }>()
);

const bookingHistoryReceived = createAction(
  '[Booking History] List of booking history received',
  props<{ bookingHistory: Array<IBooking> }>()
);

const deleteBooking = createAction(
  '[Booking History] Delete booking',
  props<{ booking: IDeleteBooking }>()
);

const deleteBookingSuccess = createAction(
  '[Booking History] Delete booking'
);

const updateDisplayedData = createAction(
  '[Booking History] Update displayed data',
  props<{ displayedBookingHistory: Array<IBooking> }>()
);

export const BookingHistoryActions = {
  loadBookingHistory,
  bookingHistoryReceived,
  deleteBooking,
  deleteBookingSuccess,
  updateDisplayedData,
};
