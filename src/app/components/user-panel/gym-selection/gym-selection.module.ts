import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymSelectionComponent } from './gym-selection/gym-selection.component';
import { GymCardComponent } from './gym-card/gym-card.component';
import { AppDataService } from 'src/app/services/app-data.service';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    GymSelectionComponent,
    GymCardComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('gymSelection', {})
  ],
  providers: [
    AppDataService
  ],
  exports: [
    GymSelectionComponent
  ]
})
export class GymSelectionModule { }
