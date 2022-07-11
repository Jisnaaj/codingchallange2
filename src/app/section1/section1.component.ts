import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {
   url="./assets/images/food1.jpg";
   url1="./assets/images/food2.png";
   url2="./assets/images/food3.png";
  constructor() { }

  ngOnInit(): void {
  }

}
