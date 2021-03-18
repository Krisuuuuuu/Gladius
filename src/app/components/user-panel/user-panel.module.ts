import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from './toolbar/toolbar.module';
import { UserPanelComponent } from './user-panel.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    UserPanelComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule
  ],
  exports: [
    UserPanelComponent
  ]
})
export class UserPanelModule { }
