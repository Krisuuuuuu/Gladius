import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUserProfile } from 'src/app/model/user-profile/IUserProfile';
import { UserActions } from 'src/app/state+/actions/user.actions';
import { UserProfileSelectors } from 'src/app/state+/selectors/user-profile.selectors';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientInfoComponent implements OnInit {
  userProfile: IUserProfile | null;

  clientInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store<any>) {}

  ngOnInit(): void {
    this.clientInfoForm = this.formBuilder.group({
      country: '',
      city: '',
      postalCode: '',
      street: '',
      email: '',
      phoneNumber: ''
    });

    this.store.select(UserProfileSelectors.selectUserProfile).subscribe(
      userProfile => this.userProfile = userProfile
    );

    this.getUserProfile();
  }

  save(): void {
    const userProfile: IUserProfile = {
      id: this.userProfile !== null ? this.userProfile.id : '',
      name: this.userProfile !== null ? this.userProfile.name : '',
      surname: this.userProfile !== null ? this.userProfile.surname : '',
      pesel: this.userProfile !== null ? this.userProfile.pesel : '',
      birth_date: this.userProfile !== null ? this.userProfile.birth_date : '',
      country: this.clientInfoForm.controls['country'].value,
      city: this.clientInfoForm.controls['city'].value,
      street: this.clientInfoForm.controls['street'].value,
      postal_code: this.clientInfoForm.controls['postalCode'].value,
      email: this.clientInfoForm.controls['email'].value,
      phone_number: this.clientInfoForm.controls['phoneNumber'].value,
    };

    this.store.dispatch(UserActions.updateUserProfile({ token: "", userProfile: userProfile }));
    this.router.navigateByUrl("panel/edit/calendar");
  }

  changePassword(): void {
    this.router.navigateByUrl('panel/edit/password');
  }

  private getUserProfile(): void {
    this.store.dispatch(UserActions.loadUserProfile({ token: "" }));
  }
}
