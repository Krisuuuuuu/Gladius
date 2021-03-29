import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [BookingHistoryComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [BookingHistoryComponent]
})
export class BookingHistoryModule { }
