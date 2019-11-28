import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aub-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../common.css','./footer.component.css']
})
export class FooterComponent implements OnInit {
  autor: string;
  fecha: Date;

  constructor() {
    this.autor = 'Antonio Cachaza Gómez ( Kaxhy )';
  }

  ngOnInit() {
    this.fecha = new Date();
  }

}
