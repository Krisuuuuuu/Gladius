import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { DialogsModule } from '../../dialogs/dialogs.module';
import { MatSelectModule } from '@angular/material/select';

import { CalendarComponent } from './calendar/calendar.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { HeaderButtonComponent } from './header-button/header-button.component';
import { CalendarHourComponent } from './calendar-hour/calendar-hour.component';
import { CalendarCardComponent } from './calendar-card/calendar-card.component';
import { CalendarPanelComponent } from './calendar-panel/calendar-panel.component';



@NgModule({
  declarations: [
    CalendarComponent,
    CalendarHeaderComponent,
    HeaderButtonComponent,
    CalendarHourComponent,
    CalendarCardComponent,
    CalendarPanelComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    DialogsModule,
    MatSelectModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
