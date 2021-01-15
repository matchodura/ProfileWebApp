import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import {HostListener} from '@angular/core';




@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})


export class MainNavComponent {

  profilePicture: string ='assets/img/main_photo.jpg';
  profilePictureBackground: string = 'assets/img/background.jpg';

  events: string[] = [];
 
  navbarContactLinks:string = '';
  navbarMobileListItems:string ='';
  navbarHeader:string ='';
  showToggle:boolean=false;

  public innerWidth: any;
  public innerHeight: any;

  ngOnInit() {

        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;

    }
    
  @HostListener('window:resize', ['$event'] )
  getScreenDimensions(){

    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
    
    if(window.innerWidth>900){

      this.navbarMobileListItems = 'navbar-mobile-absolute';
      this.navbarHeader = 'header-mobile-display';     
      this.showToggle = false;
     
    }

    if(window.innerWidth<=900 && window.innerWidth > 490){

      this.navbarMobileListItems = 'navbar-mobile-relative';    
      this.navbarHeader = 'header-mobile-display';  
      this.showToggle = false;
      // this.navbarHeader = 'header-mobile-hide';   

    }

    if(window.innerWidth<=490){

      this.navbarMobileListItems = 'navbar-mobile-hide';
      this.navbarHeader = 'header-mobile-hide';      
      this.showToggle = true;
      
    }   

    }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
         
    }

}