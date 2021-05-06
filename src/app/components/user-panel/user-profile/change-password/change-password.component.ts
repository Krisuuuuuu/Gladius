import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IChangePassword } from 'src/app/model/user-profile/IChangePassword';
import { UserActions } from 'src/app/state+/actions/user.actions';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChangePasswordComponent implements OnInit {
  passwordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store<any>) { }

  ngOnInit(): void {
    this.passwordForm = this.formBuilder.group({
      currentPassword: '',
      newPassword: '',
      newRePassword: '',
    });
  }

  save(): void {
    if(this.passwordForm.controls['newPassword'].value === this.passwordForm.controls['newRePassword'].value){
      const changePassword: IChangePassword = {
        email: 'mock',
        password: this.passwordForm.controls['currentPassword'].value,
        newPassword: this.passwordForm.controls['newPassword'].value
      };

      this.store.dispatch(UserActions.updateUserPassword({ token: "", userPassword: changePassword }));
      this.router.navigateByUrl("panel/edit/calendar");
    }
   }

  redirectToEditProfile(): void {
    this.router.navigateByUrl("panel/edit/profile");
  }
}
