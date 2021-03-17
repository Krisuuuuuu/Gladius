import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in-part',
  templateUrl: './sign-in-part.component.html',
  styleUrls: ['./sign-in-part.component.scss']
})
export class SignInPartComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  ngOnInit(): void { }

  save(): void {

  }

}
