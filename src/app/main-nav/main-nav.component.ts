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
  //opened: boolean;
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
    
  constructor(private breakpointObserver: BreakpointObserver) {
 
    this.getScreenDimensions();
  
  }




  
  @HostListener('window:resize', ['$event'] )
  getScreenDimensions(){

    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;

    // console.log(window.innerHeight);
    // console.log(window.innerWidth);


    //keeping githuband linkedin links to not overlap other pages
    if(window.innerHeight<=412){
      this.navbarContactLinks = 'bottomRelative';
      // console.log('relative');
    }else{
      this.navbarContactLinks = 'bottomAbsolute';
      // console.log('absolute');
    }

    if(window.innerWidth>500){

      this.navbarMobileListItems = 'navbarMobileAbsolute';
      this.navbarHeader = 'headerMobileDisplay';
      console.log('a');
      this.showToggle = false;
     
    }

    if(window.innerWidth<=500 && window.innerWidth > 450){

      this.navbarMobileListItems = 'navbarMobileRelative';
      console.log('b');
      this.showToggle = false;
    }
    if(window.innerWidth<=450){

      this.navbarMobileListItems = 'navbarMobileHide';
      this.navbarHeader = 'headerMobileHide';
      console.log('znikamy');
      this.showToggle = true;
      console.log('c');
    }   

  }



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );



}
