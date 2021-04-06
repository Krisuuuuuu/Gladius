import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {
  clientInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.clientInfoForm = this.formBuilder.group({
      country: '',
      city: '',
      postalCode: '',
      address: '',
      email: '',
      phoneNumber: ''
    });
  }

  save(): void {

  }

  changePassword(): void {
    this.router.navigateByUrl('panel/edit/password');
  }
}
