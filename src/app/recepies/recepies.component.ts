import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
url="./assets/images/pancacke.jpg";
url2="./assets/images/cak.png";
url3="./assets/images/breadd.png";
  constructor() { }

  ngOnInit(): void {
  }

}
