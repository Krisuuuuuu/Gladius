import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MustMatch } from 'src/app/helpers/must-match.validator';
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
      currentPassword: [, { validators: [Validators.required], updateOn: "change" }],
      newPassword: [, { validators: [Validators.required, Validators.minLength(6)], updateOn: "change" }],
      newRePassword: [, { validators: [Validators.required, Validators.minLength(6)], updateOn: "change" }],
    }, {
      validator: MustMatch('newPassword', 'newRePassword')
    });
  }

  save(): void {
    if (this.passwordForm.controls['newPassword'].value === this.passwordForm.controls['newRePassword'].value) {
      const changePassword: IChangePassword = {
        password: this.passwordForm.controls['currentPassword'].value,
        new_password: this.passwordForm.controls['newPassword'].value
      };

      this.store.dispatch(UserActions.updateUserPassword({ userPassword: changePassword }));

      this.router.navigateByUrl("panel/edit/profile");
      this.passwordForm.reset();
    }
  }

  redirectToEditProfile(): void {
    this.router.navigateByUrl("panel/edit/profile");
  }
}
