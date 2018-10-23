import { Component, OnInit } from '@angular/core';


const WELCOME: any = [
  "Welcome to Roots, the ministry page of Chuck Mersereau.",
  
  "This website was created so that ministry partners and those \
  interested could find information about what the Lord has been \
  doing through me as a full-time missionary as well as interact with \
  me and other members of my ministry team. Here you can find details \
  of my job as a computer programmer, stories of what's happening in \
  field ministry, look at past prayer letters, and more!",

  "I have chosen the name \"Roots\" because me and my ministry partners \
  share much in common with a tree and it\'s roots. While only a certain \
  portion of a tree is above ground, many vital and life giving functions \
  take place beneath the ground in the roots. Without deep roots, a tree \
  would lose it's ability to stand and could no longer gather water, an \
  essential ingredient for life. Likewise, while I am the one that is called \
  the missionary, the work that is done in my ministry would not be possible \
  without the faithful men and women that support me through finances \
  and prayers. My desire is that this page is a testament to the \
  faithfulness of the Lord and those who have come alongside me as we \
  work together for the sake of the Gospel!",
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
      console.log(this.welcome);
   }

  ngOnInit() {
  }

}
