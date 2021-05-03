import { Component, Input } from '@angular/core';
import { IGym } from 'src/app/model/gym-selection/IGym';

@Component({
  selector: 'app-gym-card',
  templateUrl: './gym-card.component.html',
  styleUrls: ['./gym-card.component.scss']
})
export class GymCardComponent {
  @Input() gym: IGym;
}
