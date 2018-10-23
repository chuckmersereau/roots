import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

const LINKS: any = [
  { name: "Home", view: "/home", selected: false },
  { name: "Prayer Requests", view: '/prayerrequests', selected: false },
  { name: "Office", view: "/office", selected: false},
  { name: "Field Ministry", view: '/fieldministry', selected: false },
  { name: "Prayer Letters", view: '/prayerletters', selected: false },
]

@Component({
  selector: 'nav-bar',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent implements OnInit {
  private links: any;
  constructor(
    private location: Location
  ) {

    this.links = LINKS;
    this.location.go(this.location.path());
    this.changeSelected(this.location.path());
   }

  ngOnInit() {}

  changeSelected(view: string): void {
    for(let link of this.links) {
      if( link.view == view ) {
        link.selected = true;
      } else {
        link.selected = false;
      }
    }
  }
}
