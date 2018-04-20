import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatMenuModule,
  MatTooltipModule,
  MatSidenavModule,MatListModule,MatButtonToggleModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BookingsComponent } from './bookings/bookings.component';
import {HomeComponent} from "./home/home.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ListingsComponent } from './listings/listings.component';
import { SettingsComponent } from './settings/settings.component';
import { ReviewsComponent } from './reviews/reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingsComponent,
    ListingsComponent,
    SettingsComponent,
    ReviewsComponent,
  ],
  imports: [
    AppRoutingModule,

    BrowserModule, MatButtonModule, MatCheckboxModule,
    MatToolbarModule,
    MatIconModule, MatTooltipModule,
    MatCardModule, MatMenuModule, MatDividerModule, MatSidenavModule,
    BrowserAnimationsModule, NgbModule.forRoot(), FormsModule, MatListModule, MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
