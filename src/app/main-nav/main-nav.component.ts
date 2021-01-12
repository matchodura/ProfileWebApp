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

  @HostListener('window:resize', ['$event'])


  getScreenHeight(){
    console.log(window.innerHeight);
    if(window.innerHeight<=412){
      this.navbarContactLinks = 'bottomRelative';
      console.log('relative');
    }else{
      this.navbarContactLinks = 'bottomAbsolute';
      console.log('absolute');
    }
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {

    this.getScreenHeight();
  }

}
