import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {
  clientInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.clientInfoForm = this.formBuilder.group({
      country: '',
      city: '',
      postalCode: '',
      address: '',
      email: '',
      phoneNumber: ''
    });
  }

  ngOnInit(): void {

  }

  save(): void {

  }
}
