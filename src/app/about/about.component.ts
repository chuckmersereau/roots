import { Component, OnInit } from '@angular/core';
import { ABOUT } from './info';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private about: any;
  constructor() {
    this.about = ABOUT;
  }

  ngOnInit() {
  }

}
