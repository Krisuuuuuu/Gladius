import { IBooking } from "src/app/model/booking-history/IBooking";

export interface IBookingHistoryState {
  areBookingsReceiving: boolean;
  isBookingDeleting: boolean;
  bookings: Array<IBooking>;
  filteredBookings: Array<IBooking>;
  displayedBookings: Array<IBooking>;
}

export const initialBookingHistoryState: IBookingHistoryState = {
  areBookingsReceiving: false,
  isBookingDeleting: false,
  bookings: [],
  filteredBookings: [],
  displayedBookings: []
};
