import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserActions } from 'src/app/state+/actions/user.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {

  constructor(
    private router: Router,
    private store: Store<any>
    ) { }

  ngOnInit(): void {
  }

  signOut(): void {
    this.store.dispatch(UserActions.signOut());
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
