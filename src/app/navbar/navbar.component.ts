import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
url="./assets/images/logo.png";
url1="./assets/images/home.png";
url2="./assets/images/ser.png";
url3="./assets/images/phone.png";
url4="./assets/images/sam.png";
url5="./assets/images/user.png";
url6="./assets/images/salad.png";

  constructor() { }

  ngOnInit(): void {
  }

}
