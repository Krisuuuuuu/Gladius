import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
      email: '',
      password: ''
    })
  }

  signIn(): void {
    const signInData: ISignInData = {
      username: this.signInForm.controls['email'].value,
      password: this.signInForm.controls['password'].value
    };

    this.store.dispatch(UserActions.signInButtonClicked({ signInData: signInData }));
    this.signInForm.reset();
  }
}
