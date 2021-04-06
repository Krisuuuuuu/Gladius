import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar-panel',
  templateUrl: './calendar-panel.component.html',
  styleUrls: ['./calendar-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarPanelComponent implements OnInit {
  areas: string[] = ["Gym", "Cardio", "Fitness", "Squash", "Badminton", "Football Pitch"];
  classes: string[] = ["Classes 1", "Classes 2", "Classes 3"];
  trainers: string[] = ["Trainer 1", "Trainer 2", "Trainer 3"];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToGymSelection(): void {
    this.router.navigateByUrl("panel");
  }
}
