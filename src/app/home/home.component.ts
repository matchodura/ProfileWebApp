import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {


  // profilePicture: string ='assets/img/logo.jpg';

  profilePicture: string ='assets/img/main_photo.jpg';
  profilePictureBackground: string = 'assets/img/background.jpg';

  constructor() { }

  ngOnInit(): void {
  
  }

  getUrl(){
    console.log(this.profilePictureBackground);
   return this.profilePictureBackground;
}

}
