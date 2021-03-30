import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { CalendarComponent } from './calendar.component';



@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
