import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'aub-saludo-rx',
  templateUrl: './saludo-rx.component.html',
  styleUrls: ['./saludo-rx.component.css']
})
export class SaludoRxComponent implements OnInit {
  fcNombre: FormControl;

  constructor() {
    this.fcNombre = new FormControl()
   }

  ngOnInit() {
  }

  onClickBorrar(ev: Event): void {
    this.fcNombre.reset();
  }

}
