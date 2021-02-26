import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  profilePicture: string ='./assets/img/main_photo.jpg';
  picHTML: string ='./assets/img/html_logo.png';
  picCSS: string ='./assets/img/css_logo.png';
  picJS: string ='./assets/img/js_logo.png';
  picAngular: string ='./assets/img/angular_logo.png';
  picCSHARP: string ='./assets/img/csharp_logo.png';
  picDOTNET: string ='./assets/img/net_logo.png';
  // picASPNET: string ='assets/img/main_photo.jpg';
  picSQL: string ='./assets/img/sql_logo.png';
  picVS: string ='./assets/img/VS_logo.png';
  picGIT: string ='./assets/img/github_logo.png';
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { 
   
  }

  ngOnInit(): void {
  }

}
