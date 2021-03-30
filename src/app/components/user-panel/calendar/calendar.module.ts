import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { CalendarComponent } from './calendar.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { HeaderButtonComponent } from './header-button/header-button.component';



@NgModule({
  declarations: [CalendarComponent, CalendarHeaderComponent, HeaderButtonComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
