import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  private verses: any;
  constructor() {
    this.verses = [
      {
        reference: 'Philippians 4:6-7',
        text: 'Do not be anxious about anything, but in every situation, by \
          prayer and petition, with thanksgiving, present your requests to \
          God. And the peace of God, which transcends all understanding, \
          will guard your hearts and your minds in Christ Jesus.'
      }
    ]
  }

  ngOnInit() {
  }

}
