import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/services/app-data.service';

@Component({
  selector: 'app-gym-selection',
  templateUrl: './gym-selection.component.html',
  styleUrls: ['./gym-selection.component.scss']
})
export class GymSelectionComponent implements OnInit {

  constructor(private appDataService: AppDataService) { }

  ngOnInit(): void {
    let result;
    this.appDataService.getGyms("MyCompany").subscribe(data => {
      result = data;
      debugger
    });
  }

}
