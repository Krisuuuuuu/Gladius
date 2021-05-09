import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Input, OnInit, ViewChild } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';
import { IBooking } from 'src/app/model/booking-history/IBooking';
import { IDeleteBooking } from 'src/app/model/booking-history/IDeleteBooking';
import { BookingHistoryActions } from 'src/app/state+/actions/booking-history.actions';
import { BookingHistorySelectors } from 'src/app/state+/selectors/booking-history.selectors';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  encapsulation: ViewEncapsulation.None
})

export class BookingTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input()bookingsType: string;

  bookingsHistory: Array<IBooking> = [];

  data: Array<IBooking> = [];

  columnsToDisplay: string[] = ["No.", "Activity Name", "Date", "Start Hour", "End Hour", "Booking Status"];

  expandedElement: IBooking;

  dataSource = new MatTableDataSource<IBooking>(this.data);

  currentSize: number;

  totalSize: number;

  constructor(public dialog: MatDialog, private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select(BookingHistorySelectors.selectBookings).subscribe(
      bookingsHistory => {
        if(bookingsHistory.length > 0){
          this.bookingsHistory = bookingsHistory;
          this.totalSize = bookingsHistory.length;
          this.filterData();
          this.dataSource = new MatTableDataSource<IBooking>(this.data);
        }
      }
    );

    this.getBookingHistory();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  cancelBooking(booking: IBooking): void {
    let message: string;

    message = "Do you want to remove this reservation?";

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: message
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if(result === true){

          const bookingToDelete: IDeleteBooking = {
            booking_id: booking.id
          };

          this.store.dispatch(BookingHistoryActions.deleteBooking({ booking: bookingToDelete }));
          let elements: Array<IBooking> = this.data.filter(b => b.id === bookingToDelete.booking_id);
          elements[0].booking_status = 'Cancelled';
          this.filterData();
          this.dataSource = new MatTableDataSource<IBooking>(this.data);
        }
    });
  }

  private filterData(): void {
    switch (this.bookingsType) {
      case "All":
        this.data = this.bookingsHistory;
        break;
      case "Active":
        this.data = this.bookingsHistory.filter(bk => bk.booking_status === 'Active');
        break;
      case "Canceled":
        this.data = this.bookingsHistory.filter(bk => bk.booking_status === 'Canceled');
        break;
      default:
        break;
    }
  }

  private getBookingHistory(): void {
    this.store.dispatch(BookingHistoryActions.loadBookingHistory());
  }
}
