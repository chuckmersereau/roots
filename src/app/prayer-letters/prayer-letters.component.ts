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
      { name: 'September 2018', view:'assets/September_2018.pdf' },
      { name: 'August 2018', view: 'assets/August_2018.pdf' }
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
