import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatMenuModule,
  MatCommonModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatButtonToggleModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { BookingsComponent } from './bookings/bookings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListingsComponent } from './listings/listings.component';
import { SettingsComponent } from './settings/settings.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth/auth.service';
import {AuthGuard} from "./services/auth/auth-guard.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import {AlertService} from "./services/alert.service";
import {fakeBackendProvider} from "./helpers/fake-backend";
import {UserService} from "./services/user.service";
import {JwtInterceptor} from "./helpers/jwt.interceptor";
import { AlertComponent } from './alert/alert.component';
import {RegisterComponent} from "./register/register.component";
import {AuthenticationService} from "./services/authentication.service";

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    ListingsComponent,
    SettingsComponent,
    ReviewsComponent,
    LoginComponent,
    DashboardComponent,
    AlertComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCommonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    MatListModule,
    MatButtonToggleModule,
    AngularFireModule.initializeApp(environment.config, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    AuthenticationService,
    AlertService,
    AuthService,
    AuthGuard,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
