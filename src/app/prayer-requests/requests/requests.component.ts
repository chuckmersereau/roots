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
        reference: 'Ephesians 6:18',
        text: 'And pray in the Spirit on all occasions with all kinds of \
          prayers and requests. With this in mind, be alert and always keep on \
          praying for all the Lord’s people.'
      }
    ]
  }

  ngOnInit() {
    this.requests = PRAYER_REQUESTS;
  }

}
