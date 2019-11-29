import { Component, OnInit, ViewChild } from '@angular/core';
import { MaestroDatos, AlumnoModel } from 'src/app/models/alumno.model';
import { TURNOS, CURSOS } from 'src/app/models/cursos.data';
import { Event } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'aub-from-td',
  templateUrl: './from-td.component.html',
  styleUrls: ['../cursos.component.css', './from-td.component.css']
})
export class FromTdComponent implements OnInit {
  turnos: Array<MaestroDatos>;
  cursos: Array<MaestroDatos>;
  alumno: AlumnoModel;
  @ViewChild('formRefTd', {static: true}) formTD: NgForm;

  constructor() {
    this.turnos = TURNOS;
    this.cursos = CURSOS;

    this.alumno = new AlumnoModel();
  }

  ngOnInit() {
    console.dir(this.formTD);
  }

  onSubmit(ev: Event): void {
    console.log('enviando..', this.alumno);
  }


}
