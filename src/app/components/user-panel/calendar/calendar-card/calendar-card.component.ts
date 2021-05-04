import { Component, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { IActivity } from 'src/app/model/calendar/IActivity';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss']
})
export class CalendarCardComponent implements OnChanges {
  @Input() activity: IActivity;
  specialClass: string = '';

  constructor(private store: Store<any>) { }

  ngOnChanges(): void {
    this.setColorOfCard();
  }

  calculateDuration(): string {
    const startDate: Date = new Date(this.activity.start_hour);
    const endDate: Date = new Date(this.activity.end_hour);

    const result: number = startDate.getTime() - endDate.getTime();
    const resultDate = new Date(result);

    return resultDate.toString();
  }

  setColorOfCard(): void {
    if(this.activity.is_booked_by_me)
      this.specialClass = 'active';
    else if(!this.activity.is_booked_by_me && this.activity.current_bookings_number === this.activity.max_clients)
      this.specialClass = 'locked';
    else
      this.specialClass = '';
  }
}
