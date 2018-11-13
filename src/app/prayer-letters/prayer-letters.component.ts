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
  listYears: any;
  years: any;
  constructor() {
    this.years = [];
    this.letters = LETTERS;
    console.log(this.years);

    this.letters.sort(function(a, b) {
      return b.date - a.date;
    });

    this.getYears();
    this.showLetter(this.letters[0]);
   }

  ngOnInit() {
  }

  showLetter(_letter: any) {
    for(let letter of this.letters) {
      if( letter.date == _letter.date) {
        letter.selected = true;
        this.letter=letter;
      } else {
        letter.selected = false;
      }
    }
    for(let year of this.years){
      if(year.year == _letter.year) {
        year.selected = true;
      } else {
        year.selected = false;
      }
    }
  }

  getYears() {
    let listYears = [];
    for(let letter of this.letters) {
      if(listYears.indexOf(letter.year) == -1) {
        listYears.push(letter.year)
      }
    }
    for(let year of listYears){
      this.years.push({ year: year, show:false, selected: false });
    }
  }

  showYear(_year: any) {
    for(let year of this.years){
      if(year.year == _year.year) {
        year.show = !year.show;
      }
    }
  }

}
