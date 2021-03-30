import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from './toolbar/toolbar.module';
import { UserPanelComponent } from './user-panel.component';
import { UserProfileModuleModule } from './user-profile/user-profile-module.module';
import { GymSelectionModule } from './gym-selection/gym-selection.module';
import { BookingHistoryModule } from './booking-history/booking-history.module';
import { CalendarModule } from './calendar/calendar.module';


@NgModule({
  declarations: [
    UserPanelComponent,
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    UserProfileModuleModule,
    GymSelectionModule,
    BookingHistoryModule,
    CalendarModule,
  ],
  exports: [
    UserPanelComponent
  ]
})
export class UserPanelModule { }
