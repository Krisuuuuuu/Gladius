import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Input, OnChanges, ViewChild } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IBooking } from 'src/app/model/booking-history/IBooking';

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

  columnsToDisplay: string[] = ["No.", "Date", "Day", "Hour", "Activity Name", "Booking Status"];

  expandedElement: IBooking;

  dataSource = new MatTableDataSource<IBooking>(this.data);

  currentSize: number;

  pageSizes: Array<number>;

  totalSize: number;

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(): void {
    this.customizePaginator();
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
