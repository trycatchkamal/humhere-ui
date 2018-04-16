import { Component, OnInit , ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  events=[];
  shouldRun=true;
  selectedIndex=null;

  /*navItems=[
    {icon: 'fa fa-th-large icon', text:'Dashboard'},
    {icon: 'fa fa-calendar icon', text:'Bookings'},
    {icon: 'fa fa-list icon', text:'Listings'},
    {icon: 'fa fa-star icon', text:'Reviews'},
    {icon: 'fa fa-cog icon', text:'Settings'}
  ];*/

  navItems=[
   {icon: 'dashboard', text:'Dashboard'},
   {icon: 'perm_contact_calendar', text:'Bookings'},
   {icon: 'list', text:'Listings'},
   {icon: 'grade', text:'Reviews'},
   {icon: 'settings', text:'Settings'}
   ];

  mobileQuery: MediaQueryList;

  fillerContent = Array(10).fill(0).map(() =>
    `This is to test the content`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 1500px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  select(index) {
    if (this.selectedIndex === null) {
      this.selectedIndex = index;
    }
    else if (this.selectedIndex === index) {
      this.selectedIndex = null;
    }
    else {
      this.selectedIndex = index;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
