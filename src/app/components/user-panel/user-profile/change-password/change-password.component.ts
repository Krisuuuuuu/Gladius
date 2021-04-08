import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChangePasswordComponent implements OnInit {
  passwordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.passwordForm = this.formBuilder.group({
      currentPassword: '',
      newPassword: '',
      newRePassword: '',
    });
  }

  save(): void { }

  redirectToEditProfile(): void {
    this.router.navigateByUrl("panel/edit/profile");
  }
}
