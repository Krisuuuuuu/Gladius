import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SignInPartComponent } from './sign-in-part/sign-in-part.component';



@NgModule({
  declarations: [
    MainPageComponent,
    SignInPartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
