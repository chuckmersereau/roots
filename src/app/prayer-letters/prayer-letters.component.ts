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
        name: 'October 2018',
        link: 'https://drive.google.com/open?id=1ZHwd9C3r-3pbjGxd3nCyUGNMqB8KwUoy',
        view: [
          'https://drive.google.com/uc?id=1ZB9N4IZsTvDUaGiswQ2H4V0hhqMMp_Za'
        ]
      },
      {
        name: 'September 2018',
        link:"https://drive.google.com/open?id=1zhWn652yC78Cy-aEqAXfcyIEDlKYyrWe",
        view: [
          'https://drive.google.com/uc?id=1K-iBYkIR4jSoYs_tDAcTQ_HyjXaN_Rrn',
          'https://drive.google.com/uc?id=13QxX7GSPsmKSVYTBnc9JPew7HjEcJcZ5'
      ]},
      {
        name: 'August 2018',
        link: "https://drive.google.com/open?id=10F3upGPyMPNFYePAsAw-1LV1DgeH604J",
        view: [
          'https://drive.google.com/uc?id=1PiZY3FkBabUcp0sTRV2VRWEJ_EEpOeqn',
          'https://drive.google.com/uc?id=12_PVgN7LXugSonGEIxiyrJhGv9Bdp5G0'
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
