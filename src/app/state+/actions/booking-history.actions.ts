import { createAction, props } from "@ngrx/store";
import { IBooking } from "src/app/model/booking-history/IBooking";
import { IDeleteBooking } from "src/app/model/booking-history/IDeleteBooking";

const bookingHistoryReceived = createAction(
  '[Booking History] List of booking history received',
  props<{ bookingHistory: Array<IBooking> }>()
);

const deleteBooking = createAction(
  '[Booking History] Delete booking',
  props<{ booking: IDeleteBooking }>()
);

const moveToAnotherPage = createAction(
  '[Booking History] Move to another page',
  props<{ pageNumber: number, bookingList: Array<IBooking> }>()
);

export const BookingHistoryActions = {
  bookingHistoryReceived,
  deleteBooking,
  moveToAnotherPage
}
