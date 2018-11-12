import { Component, OnInit } from '@angular/core';
import { LETTERS } from '../letters';

@Component({
  selector: 'app-prayer-letters',
  templateUrl: './prayer-letters.component.html',
  styleUrls: ['./prayer-letters.component.scss']
})
export class PrayerLettersComponent implements OnInit {
  letters: any;
  letter: any;
  constructor() {
    this.letters = LETTERS;
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
