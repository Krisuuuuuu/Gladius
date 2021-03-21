import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { UserProfileComponent } from './user-profile.component';
import { ClientInfoComponent } from './client-info/client-info.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    ClientInfoComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    UserProfileComponent
  ]
})
export class UserProfileModuleModule { }
