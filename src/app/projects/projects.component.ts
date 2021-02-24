import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  onlineRefrigerator:any[] = [
    './assets/projects/online-refrigerator/1.PNG',
    './assets/projects/online-refrigerator/2.PNG',
    './assets/projects/online-refrigerator/3.PNG',
    './assets/projects/online-refrigerator/4.PNG',
    './assets/projects/online-refrigerator/5.PNG',
    './assets/projects/online-refrigerator/6.PNG',
   
  ];
 
  bodyMonitorApp:any[] = [
    './assets/projects/bodymonitorapp/1.PNG',
    './assets/projects/bodymonitorapp/2.PNG',
    './assets/projects/bodymonitorapp/3.PNG',
    './assets/projects/bodymonitorapp/4.PNG',
    './assets/projects/bodymonitorapp/5.PNG',
    './assets/projects/bodymonitorapp/6.PNG',
    './assets/projects/bodymonitorapp/7.PNG'
 
  ];

  messier:any[] = [
    './assets/projects/messier/1.PNG',
    './assets/projects/messier/2.PNG',
    './assets/projects/messier/3.PNG',
    './assets/projects/messier/4.PNG',
    './assets/projects/messier/5.PNG'
  ];

  profileWebApp:any[] = [
    './assets/projects/profilewebapp/1.PNG',
    './assets/projects/profilewebapp/2.PNG',
    './assets/projects/profilewebapp/3.PNG',
    './assets/projects/profilewebapp/4.PNG',
    './assets/projects/profilewebapp/5.PNG'
 
  ];

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
