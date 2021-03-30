import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarHourComponent } from './calendar-hour.component';

describe('CalendarHourComponent', () => {
  let component: CalendarHourComponent;
  let fixture: ComponentFixture<CalendarHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarHourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
