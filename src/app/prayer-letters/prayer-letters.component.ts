import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prayer-letters',
  templateUrl: './prayer-letters.component.html',
  styleUrls: ['./prayer-letters.component.scss']
})
export class PrayerLettersComponent implements OnInit {
  letters: any;
  letter: any;
  constructor() {
    this.letters = [
      {
        name: 'September 2018',
        link:"https://drive.google.com/open?id=1zhWn652yC78Cy-aEqAXfcyIEDlKYyrWe",
        view:[
          'assets/September_2018-page1.jpg',
          'assets/September_2018-page2.jpg'
        ]},
      {
        name: 'August 2018',
        link: "https://drive.google.com/open?id=10F3upGPyMPNFYePAsAw-1LV1DgeH604J",
        view: [
          'assets/August_2018-page1.jpg',
          'assets/August_2018-page2.jpg'
      ]}
    ]
    this.letter = this.letters[0];
   }

  ngOnInit() {
  }

  showLetter(letter: any) {
    this.letter=letter;
  }

  viewLetter(): string {
    console.log(this.letter.view);
    return this.letter.view;
  }
}
