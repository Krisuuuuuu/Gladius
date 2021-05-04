import { Component, Input } from '@angular/core';
import { IDateToDisplay } from 'src/app/model/calendar/IDateToDisplay';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss']
})
export class CalendarHeaderComponent {
  @Input() dateToDisplay: IDateToDisplay;
}
