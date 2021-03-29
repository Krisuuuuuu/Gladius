import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface TableElement {
  no: number,
  activityName: string,
  activityDate: string,
  activityDay: string,
  activityHour: string,
  bookingDate: string,
  gymName: string,
  status: string
}

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

export class BookingTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  columnsToDisplay: string[] = ["No.", "Activity Date", "Activity Day", "Activity Hour", "Activity Name", "Booking Status"];
  expandedElement: TableElement | null;
  data: TableElement[] = [
    {
      no: 1,
      activityName: "Example Activity",
      activityDate: "00-00-0000",
      activityDay: "Monday",
      activityHour: "9.00",
      bookingDate: "00-00-0000",
      gymName: "Example Gym",
      status: "Active"
    },
    {
      no: 2,
      activityName: "Example Activity",
      activityDate: "00-00-0000",
      activityDay: "Monday",
      activityHour: "9.00",
      bookingDate: "00-00-0000",
      gymName: "Example Gym",
      status: "Cancelled"
    }
  ];

  dataSource = new MatTableDataSource<TableElement>(this.data);

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
