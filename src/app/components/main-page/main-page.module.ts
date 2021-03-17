import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MainPageComponent } from './main-page.component';
import { SignInPartComponent } from './sign-in-part/sign-in-part.component';



@NgModule({
  declarations: [
    MainPageComponent,
    SignInPartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
