import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {


  // profilePicture: string ='assets/img/logo.jpg';

  profilePicture: string ='assets/img/main_photo.jpg';
  profilePictureBackground: string = 'assets/img/background.jpg';

  viewProjects: boolean;

  divName: string;


  constructor(private router: Router) { 
    this.viewProjects = false;
    this.divName = 'div1';
    
  }

  ngOnInit(): void {
  
  }

  getDiv() {
    this.router.navigate(['/projects'], { fragment: this.divName });
  }
}


