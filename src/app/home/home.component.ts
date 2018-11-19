import { Component, OnInit } from '@angular/core';


const WELCOME: any = [
  "Welcome to Roots, the ministry page of Chuck Mersereau.",

  "This website was created so that ministry partners and others \
  could find out what the Lord has been \
  doing through me as a full-time missionary. You can interact with \
  me and other members of my ministry team through prayer requests, \
  find details of my job as a computer programmer, read stories from \
  field ministry, and more!"
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  welcome: string;

  constructor() {
      this.welcome = WELCOME;
   }

  ngOnInit() {
  }

}
