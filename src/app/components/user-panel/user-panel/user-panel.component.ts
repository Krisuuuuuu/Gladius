import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
