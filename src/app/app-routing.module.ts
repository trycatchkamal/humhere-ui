import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookingsComponent} from './bookings/bookings.component';
import {HomeComponent} from "./home/home.component";
import {ListingsComponent} from "./listings/listings.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'bookings',
    component: BookingsComponent
  },
  {
    path: 'listings',
    component: ListingsComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
