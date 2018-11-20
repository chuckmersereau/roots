import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

const LINKS: any = [
  { name: "Prayer Requests", view: '/prayerrequests' },
  { name: "Office", view: "/office" },
  { name: "Field Ministry", view: '/fieldministry' },
  { name: "Prayer Letters", view: '/prayerletters' },
  { name: "About", view: '/about' }
]

@Component({
  selector: 'nav-bar',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent implements OnInit {
  private links: any;

  constructor(
    private route: ActivatedRoute
  ) {
    this.links = LINKS;
   }

  ngOnInit() {
    // this.title = this.route.data.title;
  }


}
