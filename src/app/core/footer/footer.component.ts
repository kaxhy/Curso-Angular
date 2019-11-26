import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aub-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autor: string;
  fecha: Date;

  constructor() {
    this.autor = 'kaxhy';
  }

  ngOnInit() {
    this.fecha = new Date();
  }

}
