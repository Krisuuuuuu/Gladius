import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBookingHistoryState } from "../model/IBookingHistoryState";

const selectBookingHistoryState = createFeatureSelector<IBookingHistoryState>(
  'bookingHistory'
);

const selectBookings = createSelector(
  selectBookingHistoryState,
  (state: IBookingHistoryState) => state.bookings
);

export const BookingHistorySelectors = {
  selectBookings
};
