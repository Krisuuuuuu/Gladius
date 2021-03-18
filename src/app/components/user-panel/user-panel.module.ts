import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from './toolbar/toolbar.module';
import { UserPanelComponent } from './user-panel.component';


@NgModule({
  declarations: [
    UserPanelComponent
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
