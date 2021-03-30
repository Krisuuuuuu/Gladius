import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  hours: string[] = ["6.00", "8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00"];

  constructor() { }

  ngOnInit(): void {
  }

}
