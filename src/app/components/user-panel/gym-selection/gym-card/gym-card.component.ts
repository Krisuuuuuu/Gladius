import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { IGym } from 'src/app/model/gym-selection/IGym';
import { GymSelectionSelectors } from 'src/app/state+/selectors/gym-selection.selectors';

@Component({
  selector: 'app-gym-card',
  templateUrl: './gym-card.component.html',
  styleUrls: ['./gym-card.component.scss']
})
export class GymCardComponent implements OnInit{
  @Input() gym: IGym;
  thumbnail: any;
  isCurrentGym: boolean;

  constructor(
    private sanitizer: DomSanitizer,
    private store: Store<any>
    ) {}

  ngOnInit(): void {
    this.thumbnail = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + this.gym.thumbnail);
    this.store.select(GymSelectionSelectors.selectCurrentGym).subscribe(
      currentGym => currentGym.name === this.gym.name ? this.isCurrentGym = true : this.isCurrentGym = false
    );
  }
}
