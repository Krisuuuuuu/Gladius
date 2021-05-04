import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogsModule } from '../../dialogs/dialogs.module';

import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BookingTableComponent } from './booking-table/booking-table.component';


@NgModule({
  declarations: [
    BookingHistoryComponent,
    BookingTableComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    DialogsModule,
  ],
  exports: [BookingHistoryComponent]
})
export class BookingHistoryModule { }
