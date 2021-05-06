import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { IBooking } from 'src/app/model/booking-history/IBooking';
import { BookingHistoryActions } from 'src/app/state+/actions/booking-history.actions';
import { BookingHistorySelectors } from 'src/app/state+/selectors/booking-history.selectors';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookingHistoryComponent implements OnInit {
  bookingHistory: Array<IBooking>;
  activeBookingHistory: Array<IBooking>;
  cancelledBookingHistory: Array<IBooking>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select(BookingHistorySelectors.selectBookings).subscribe(
      bookingsHistory => {
        this.bookingHistory = bookingsHistory;
        this.filterActiveBooking();
        this.filterCancelledBooking();
      }
    );

    this.getBookingHistory();
  }

  private filterActiveBooking(): void {
    this.activeBookingHistory = this.bookingHistory.filter(bk => bk.booking_status === 'active');
  }

  private filterCancelledBooking(): void {
    this.cancelledBookingHistory = this.bookingHistory.filter(bk => bk.booking_status === 'Cancelled');
  }

  private getBookingHistory(): void {
    this.store.dispatch(BookingHistoryActions.loadBookingHistory({ email: 'magamail@hermail.com' }));
  }
}
