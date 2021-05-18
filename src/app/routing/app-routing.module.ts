import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from '../components/main-page/main-page/main-page.component';
import { BookingHistoryComponent } from '../components/user-panel/booking-history/booking-history/booking-history.component';
import { CalendarComponent } from '../components/user-panel/calendar/calendar/calendar.component';
import { GymSelectionComponent } from '../components/user-panel/gym-selection/gym-selection/gym-selection.component';
import { UserPanelComponent } from '../components/user-panel/user-panel/user-panel.component';
import { ChangePasswordComponent } from '../components/user-panel/user-profile/change-password/change-password.component';
import { ClientInfoComponent } from '../components/user-panel/user-profile/client-info/client-info.component';
import { UserProfileComponent } from '../components/user-panel/user-profile/user-profile/user-profile.component';
import { AuthorizationGuard } from '../state+/guards/authorization.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MainPageComponent },
  { path: 'panel', component: UserPanelComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'gyms'},
    {
      path: 'gyms',
      canActivate: [AuthorizationGuard],
      component: GymSelectionComponent
    },
    {
      path: 'calendar',
      canActivate: [AuthorizationGuard],
      component: CalendarComponent
    },
    {
      path: 'history',
      canActivate: [AuthorizationGuard],
      component: BookingHistoryComponent
    },
    { path: 'edit', component: UserProfileComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'profile'},
      {
        path: 'profile',
        canActivate: [AuthorizationGuard],
        component: ClientInfoComponent
      },
      {
        path: 'password',
        canActivate: [AuthorizationGuard],
        component: ChangePasswordComponent
      }
    ]},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
