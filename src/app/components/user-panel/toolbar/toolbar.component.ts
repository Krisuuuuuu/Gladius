import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signOut(): void {
    this.router.navigateByUrl("");
  }

  redirectToGymSelection(): void {
    this.router.navigateByUrl("panel");
  }

  redirectToCalendar(): void {
    this.router.navigateByUrl("panel/calendar");
  }

  redirectToHistory(): void {
    this.router.navigateByUrl("panel/history");
  }

  reditectToEditing(): void {
    this.router.navigateByUrl("panel/edit/profile");
  }
}
