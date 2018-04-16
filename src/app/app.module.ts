import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import {MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatMenuModule,
  MatTooltipModule,
  MatSidenavModule,MatListModule,MatButtonToggleModule,
} from '@angular/material';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, MatCheckboxModule,
    MatToolbarModule,
    MatIconModule, MatTooltipModule,
    MatCardModule, MatMenuModule, MatDividerModule, MatSidenavModule,
    BrowserAnimationsModule, NgbModule.forRoot(), FormsModule, MatListModule, MatButtonToggleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
