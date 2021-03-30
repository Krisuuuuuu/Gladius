import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { CalendarComponent } from './calendar.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';



@NgModule({
  declarations: [CalendarComponent, CalendarHeaderComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
