import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IUserProfile } from 'src/app/model/user-profile/IUserProfile';
import { UserActions } from 'src/app/state+/actions/user.actions';
import { UserProfileSelectors } from 'src/app/state+/selectors/user-profile.selectors';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientInfoComponent implements OnInit, OnDestroy {
  userProfile: IUserProfile;

  clientInfoForm: FormGroup;

  private userProfileSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store<any>) {}

  ngOnInit(): void {
    this.clientInfoForm = this.formBuilder.group({
      name: new FormControl({ value: '', disabled: true }),
      surname: new FormControl({ value: '', disabled: true }),
      pesel: new FormControl({ value: '', disabled: true }),
      birthDate: new FormControl({ value: '', disabled: true }),
      country: '',
      city: '',
      postalCode: '',
      street: '',
      email: '',
      phoneNumber: ''
    });

    this.userProfileSubscription = this.store.select(UserProfileSelectors.selectUserProfile).subscribe(
      userProfile => {
        if(Object.keys(userProfile).length > 0) {
          this.userProfile = userProfile;
          this.clientInfoForm.controls['name'].setValue(userProfile.name);
          this.clientInfoForm.controls['surname'].setValue(userProfile.surname);
          this.clientInfoForm.controls['pesel'].setValue(userProfile.pesel);
          this.clientInfoForm.controls['birthDate'].setValue(userProfile.birth_date);
          this.clientInfoForm.controls['country'].setValue(userProfile.country);
          this.clientInfoForm.controls['city'].setValue(userProfile.city);
          this.clientInfoForm.controls['postalCode'].setValue(userProfile.postal_code);
          this.clientInfoForm.controls['street'].setValue(userProfile.street);
          this.clientInfoForm.controls['email'].setValue(userProfile.email);
          this.clientInfoForm.controls['phoneNumber'].setValue(userProfile.phone_number);
        }
      }
    );

    this.getUserProfile();
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  }

  save(): void {
    const userProfile: IUserProfile = {
      id: this.userProfile.id,
      name: this.userProfile.name,
      surname: this.userProfile.surname,
      pesel: this.userProfile.pesel,
      birth_date: this.userProfile.birth_date,
      country: this.clientInfoForm.controls['country'].value,
      city: this.clientInfoForm.controls['city'].value,
      street: this.clientInfoForm.controls['street'].value,
      postal_code: this.clientInfoForm.controls['postalCode'].value,
      email: this.clientInfoForm.controls['email'].value,
      phone_number: this.clientInfoForm.controls['phoneNumber'].value,
    };

    this.store.dispatch(UserActions.updateUserProfile({ userProfile: userProfile }));
    this.router.navigateByUrl("panel/gyms");
  }

  changePassword(): void {
    this.router.navigateByUrl('panel/edit/password');
  }

  private getUserProfile(): void {
    this.store.dispatch(UserActions.loadUserProfile());
  }
}
