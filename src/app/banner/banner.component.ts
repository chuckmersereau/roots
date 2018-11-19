import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  title: any;
  constructor(
    private route: ActivatedRoute
  ) {
    console.log(this.route);
    this.title = this.route.data.title;
  }

  ngOnInit() {
  }

}
