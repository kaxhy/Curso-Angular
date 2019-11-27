import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aub-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']

})
export class SaludoComponent implements OnInit {
  nombre: string;
  mensaje: string;

  constructor() {
    this.mensaje = 'Aqui va tu nombre';
   }

  ngOnInit() {
  }

  onClickBorrar(ev: Event): void {
    console.log(ev);
    this.nombre = '';
  }

}
