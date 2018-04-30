import {ChangeDetectorRef, Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {AuthService} from "./services/auth/auth.service";
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  navItems=[
    {icon: 'dashboard', text:'Dashboard'},
    {icon: 'perm_contact_calendar', text:'Bookings'},
    {icon: 'list', text:'Listings'},
    {icon: 'grade', text:'Reviews'},
    {icon: 'settings', text:'Settings'}
  ];
  isExpanded = false;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  isLoggedIn$: Observable<boolean>;

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout(){
    this.authService.logout();
  }
}
