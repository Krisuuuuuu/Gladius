import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { SignInPartComponent } from './sign-in-part/sign-in-part.component';
import { MainPageComponent } from './main-page/main-page.component';
import { mainPageReducer } from 'src/app/state+/reducers/main-page.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MainPageEffects } from 'src/app/state+/effects/main-page.effects';




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
    StoreModule.forFeature('mainPage', mainPageReducer),
    EffectsModule.forFeature([MainPageEffects]),
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
