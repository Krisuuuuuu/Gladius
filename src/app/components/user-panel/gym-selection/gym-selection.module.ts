import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymSelectionComponent } from './gym-selection/gym-selection.component';
import { GymCardComponent } from './gym-card/gym-card.component';

@NgModule({
  declarations: [
    GymSelectionComponent,
    GymCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GymSelectionComponent
  ]
})
export class GymSelectionModule { }
