import { Component, OnInit } from '@angular/core';
import { PRAYER_REQUESTS } from '../requests';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  private requests: any;
  private verses: any;
  constructor() {
    this.verses = [
      {
        reference: 'Epheshians 6:18',
        text: 'And pray in the Spirit on all occasions with all kinds of \
          prayers and requests. With this in mind, be alert and always keep on \
          praying for all the Lord’s people.'
      },
      {
        reference: 'Philippians 4:6-7',
        text: 'Do not be anxious about anything, but in every situation, by \
          prayer and petition, with thanksgiving, present your requests to \
          God. 7 And the peace of God, which transcends all understanding, \
          will guard your hearts and your minds in Christ Jesus.'
      }
    ]
  }

  ngOnInit() {
    this.requests = PRAYER_REQUESTS;
  }

}
