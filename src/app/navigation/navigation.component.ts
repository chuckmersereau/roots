import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from "@angular/common";

const LINKS: any = [
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
  private view: any;

  constructor(
    private location: Location
  ) {

    this.links = LINKS;

   }

  ngOnInit() {
    this.view="/home";
    this.location.go(this.location.path());
    this.changeSelected(this.location.path());
  }

  changeSelected(view: string): void {
    for(let link of this.links) {
      if( link.view == view ) {
        link.selected = true;
        view = link.name;
      } else {
        link.selected = false;
      }
    }
    if(view == ""){
      view = "/home";
    }
    this.view = view;
  }


}
