import { Action, createReducer, on } from "@ngrx/store";
import { BookingHistoryActions } from "../actions/booking-history.actions";
import { IBookingHistoryState, initialBookingHistoryState } from "../model/IBookingHistoryState";

const reducer = createReducer(
  initialBookingHistoryState,
  on(BookingHistoryActions.loadBookingHistory, (state: IBookingHistoryState) => {
    return {
      ...state,
      areBookingsReceiving: true
    };
  }),
  on(BookingHistoryActions.bookingHistoryReceived, (state: IBookingHistoryState, { bookingHistory }) => {
    return {
      ...state,
      areBookingsReceiving: false,
      bookings: bookingHistory,
    };
  }),
  on(BookingHistoryActions.updateDisplayedData, (state: IBookingHistoryState, {displayedBookingHistory }) => {
    return {
      ...state,
      displayedBookings: displayedBookingHistory
    };
  }),
  on(BookingHistoryActions.deleteBooking, (state: IBookingHistoryState) => {
    return {
      ...state,
      isBookingDeleting: true
    };
  }),
  on(BookingHistoryActions.deleteBookingSuccess, (state: IBookingHistoryState) => {
    return {
      ...state,
      isBookingDeleting: false
    };
  })
);

export function bookingHistoryReducer(
  state: IBookingHistoryState | undefined,
  action: Action
): IBookingHistoryState {
  return reducer(state, action);
}
