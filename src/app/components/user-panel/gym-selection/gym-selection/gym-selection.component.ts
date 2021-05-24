import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IGym } from 'src/app/model/gym-selection/IGym';
import { GymSelectionActions } from 'src/app/state+/actions/gym-selection.actions';
import { GymSelectionSelectors } from 'src/app/state+/selectors/gym-selection.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gym-selection',
  templateUrl: './gym-selection.component.html',
  styleUrls: ['./gym-selection.component.scss']
})
export class GymSelectionComponent implements OnInit, OnDestroy {
  companyName: string = environment.companyName;
  gyms: Array<IGym>;

  private gymsSubsription: Subscription;
  private currentGymSubscription: Subscription;

  constructor(
    private store: Store<any>,
    private router: Router) { }

  ngOnInit(): void {
    this.gymsSubsription = this.store.select(GymSelectionSelectors.selectGyms).subscribe(
      gyms => {
        this.gyms = gyms;

        if(this.gyms !== undefined && this.gyms.length > 0){
          this.currentGymSubscription = this.store.select(GymSelectionSelectors.selectCurrentGym).subscribe(
            currentGym => {
              if(Object.keys(currentGym).length == 0)
                this.store.dispatch(GymSelectionActions.currentGymChanged({ gym: gyms[0]}));
            }
          );
        }
      }
    );
    this.getGyms();
  }

  ngOnDestroy(): void {
    this.gymsSubsription.unsubscribe();
    this.currentGymSubscription.unsubscribe();
  }

  changeCurrentGym(gym: IGym): void {
    this.store.dispatch(GymSelectionActions.currentGymChanged({ gym: gym }));
    this.router.navigateByUrl("panel/calendar");
  }

  private getGyms(): void {
    this.store.dispatch(GymSelectionActions.loadGyms({ companyName: this.companyName }));
  }
}
