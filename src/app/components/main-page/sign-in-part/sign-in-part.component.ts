import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in-part',
  templateUrl: './sign-in-part.component.html',
  styleUrls: ['./sign-in-part.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignInPartComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  save(): void {

  }

}
