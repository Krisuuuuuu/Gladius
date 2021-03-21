import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from './toolbar/toolbar.module';
import { UserPanelComponent } from './user-panel.component';
import { UserProfileModuleModule } from './user-profile/user-profile-module.module';
import { GymSelectionComponent } from './gym-selection/gym-selection.component';


@NgModule({
  declarations: [
    UserPanelComponent,
    GymSelectionComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    UserProfileModuleModule,
  ],
  exports: [
    UserPanelComponent
  ]
})
export class UserPanelModule { }
