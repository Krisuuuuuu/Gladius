import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymSelectionComponent } from './gym-selection/gym-selection.component';
import { GymCardComponent } from './gym-card/gym-card.component';
import { AppDataService } from 'src/app/services/app-data.service';
import { StoreModule } from '@ngrx/store';
import { gymSelectionReducer } from 'src/app/state+/reducers/gym-selection.reducers';
import { EffectsModule } from '@ngrx/effects';
import { GymSelectionEffects } from 'src/app/state+/effects/gym-selection.effects';

@NgModule({
  declarations: [
    GymSelectionComponent,
    GymCardComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('gymSelection', gymSelectionReducer),
    EffectsModule.forFeature([GymSelectionEffects]),
  ],
  providers: [
    AppDataService
  ],
  exports: [
    GymSelectionComponent
  ]
})
export class GymSelectionModule { }
