import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
url="./assets/images/bread.png";
url1="./assets/images/cakes.png";
url2="./assets/images/chinese.png";
url3="./assets/images/cookies.png";
url4="./assets/images/breakfast.jpg";
url5="./assets/images/starters.png";
  constructor() { }

  ngOnInit(): void {
  }

}
