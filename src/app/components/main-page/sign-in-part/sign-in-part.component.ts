import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ISignInData } from 'src/app/model/main-page/ISignInData';
import { UserActions } from 'src/app/state+/actions/user.actions';

@Component({
  selector: 'app-sign-in-part',
  templateUrl: './sign-in-part.component.html',
  styleUrls: ['./sign-in-part.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignInPartComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<any>) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: [, { validators: [Validators.required], updateOn: "change" }],
      password:  [, { validators: [Validators.required], updateOn: "change" }]
    })
  }

  signIn(): void {
    const signInData: ISignInData = {
      username: this.signInForm.controls['email'].value,
      password: this.signInForm.controls['password'].value
    };

    this.store.dispatch(UserActions.signInButtonClicked({ signInData: signInData }));
    this.signInForm.controls['email'].setValue('example@email.com');
    this.signInForm.controls['password'].setValue('Password');
  }
}
