import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AppRoutingModule } from 'src/app/routing/app-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    UserProfileComponent,
    ClientInfoComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule
  ],
  exports: [
    UserProfileComponent
  ]
})
export class UserProfileModuleModule { }
