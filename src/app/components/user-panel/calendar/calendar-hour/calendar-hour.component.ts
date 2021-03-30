import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-hour',
  templateUrl: './calendar-hour.component.html',
  styleUrls: ['./calendar-hour.component.scss']
})
export class CalendarHourComponent implements OnInit {
  @Input() hour: string;

  constructor() { }

  ngOnInit(): void {
  }

}
