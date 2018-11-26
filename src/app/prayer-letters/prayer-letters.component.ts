import { Component, OnInit } from '@angular/core';
import { LETTERS } from '../letters';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prayer-letters',
  templateUrl: './prayer-letters.component.html',
  styleUrls: ['./prayer-letters.component.scss']
})
export class PrayerLettersComponent implements OnInit {
  letters: any;
  letter: any;
  years: any;
  show: boolean=false;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.years = [];
    this.letters = LETTERS;
    this.letters.sort(function(a, b) {
      return b.date - a.date;
    });
    this.getYears();
    this.letter = this.letters[0];
   }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let letter = this.letters.find(function(letter) {
        return letter.id == params.id;
      });
      if(letter) {
        this.selectLetter(letter);
      } else {
        this.router.navigate(['prayerletters',this.letter.id]);
      }
    });
  }

  showLetter(id: any) {
    this.router.navigate(['prayerletters',id]);
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

  selectLetter(_letter: any){
    for(let letter of this.letters) {
      if( letter.id == _letter.id) {
        letter.selected = true;
        this.letter = letter;
        this.show = true;
        this.selectYear(letter);
      } else {
        letter.selected = false;
      }
    }
  }

  selectYear(_letter: any){
    for(let year of this.years){
      if(year.year == _letter.year) {
        year.selected = true;
      } else {
        year.selected = false;
      }
    }
  }

  toggleYear(_year: any) {
    for(let year of this.years){
      if(year.year == _year.year) {
        year.show = !year.show;
      }
    }
  }

}
