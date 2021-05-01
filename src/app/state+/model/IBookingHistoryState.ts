import { IBooking } from "src/app/model/booking-history/IBooking";

export interface IBookingHistoryState {
  areBookingsAdding: boolean;
  bookings: Array<IBooking>;
}

export const initialBookingHistoryState: IBookingHistoryState = {
  areBookingsAdding: false,
  bookings: []
};
