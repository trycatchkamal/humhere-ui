import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookingsComponent} from './bookings/bookings.component';
import {ListingsComponent} from "./listings/listings.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {SettingsComponent} from "./settings/settings.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./services/auth/auth-guard.service";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RegisterComponent} from "./register/register.component";

const routes:Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent},
  {
    path:'register',
    component:RegisterComponent
  },
  /*{
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },*/
  {
    path: 'bookings',
    canActivate: [AuthGuard],
    component: BookingsComponent
  },
  {
    path: 'listings',
    canActivate: [AuthGuard],
    component: ListingsComponent
  },
  {
    path: 'reviews',
    canActivate: [AuthGuard],
    component: ReviewsComponent
  },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    component: SettingsComponent
  },
  {
    path:"**", redirectTo:"/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
