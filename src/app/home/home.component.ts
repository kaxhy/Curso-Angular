import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aub-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: Array<string>;
  constructor() {
    this.images = [12, 58, 56].map((n) => `https://picsum.photos/id/${n}/900/500`);

  }

  ngOnInit() {
  }

}
