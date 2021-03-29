import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BookingTableComponent } from './booking-table/booking-table.component';



@NgModule({
  declarations: [BookingHistoryComponent, BookingTableComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [BookingHistoryComponent]
})
export class BookingHistoryModule { }
