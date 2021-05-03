import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IGym } from 'src/app/model/gym-selection/IGym';
import { AppDataService } from 'src/app/services/app-data.service';
import { GymSelectionActions } from 'src/app/state+/actions/gym-selection.actions';
import { GymSelectionSelectors } from 'src/app/state+/selectors/gym-selection.selectors';

@Component({
  selector: 'app-gym-selection',
  templateUrl: './gym-selection.component.html',
  styleUrls: ['./gym-selection.component.scss']
})
export class GymSelectionComponent implements OnInit {

  gyms: Array<IGym>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select(GymSelectionSelectors.selectGyms).subscribe(
      gyms => this.gyms = gyms
    );
    this.getGyms();

    if(this.gyms !== undefined && this.gyms.length > 0)
      this.changeCurrentGym(this.gyms[0]);
  }

  changeCurrentGym(gym: IGym): void {
    this.store.dispatch(GymSelectionActions.currentGymChanged({ gym: gym }));
  }

  private getGyms(): void {
    this.store.dispatch(GymSelectionActions.loadGyms({ email: "mock" }));
  }
}
