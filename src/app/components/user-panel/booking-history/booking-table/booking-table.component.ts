import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Input, OnChanges, ViewChild } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';
import { IBooking } from 'src/app/model/booking-history/IBooking';
import { IDeleteBooking } from 'src/app/model/booking-history/IDeleteBooking';
import { BookingHistoryActions } from 'src/app/state+/actions/booking-history.actions';
import { bookingHistoryReducer } from 'src/app/state+/reducers/booking-history.reducers';

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

export class BookingTableComponent implements AfterViewInit, OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() data: Array<IBooking> = [];

  columnsToDisplay: string[] = ["No.", "Activity Name", "Date", "Start Hour", "End Hour", "Booking Status"];

  expandedElement: IBooking;

  dataSource = new MatTableDataSource<IBooking>(this.data);

  currentSize: number;

  pageSizes: Array<number> = [];

  totalSize: number;

  constructor(public dialog: MatDialog, private store: Store<any>) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(): void {
    this.customizePaginator();
  }

  cancelBooking(booking: IBooking): void {
    let message: string;

    message = "Do you want to book this activity?";

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: message
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if(result === true){

          const bookingToDelete: IDeleteBooking = {
            user_email: "mock",
            booking_id: booking.id
          };

          this.store.dispatch(BookingHistoryActions.deleteBooking({ booking: bookingToDelete }));
        }
    });
  }

  private customizePaginator(): void {
    this.totalSize = this.data.length;
    const pageSizes: Array<number> = [1, 5, 10, 25, 50, 100];

    for (let i = 0; i < pageSizes.length; i++) {
      if(pageSizes[i] <= this.totalSize)
        this.pageSizes.push(this.pageSizes[i]);
    }

    if(this.totalSize <= 10 && !this.pageSizes.includes(this.totalSize))
      this.pageSizes.push(this.totalSize);

    this.currentSize = this.pageSizes[0];
  }
}
