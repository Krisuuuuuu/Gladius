import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history.component';



@NgModule({
  declarations: [BookingHistoryComponent],
  imports: [
    CommonModule
  ],
  exports: [BookingHistoryComponent]
})
export class BookingHistoryModule { }
