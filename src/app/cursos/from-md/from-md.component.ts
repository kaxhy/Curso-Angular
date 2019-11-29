import { Component, OnInit } from '@angular/core';
import { MaestroDatos, AlumnoModel } from 'src/app/models/alumno.model';
import { TURNOS, CURSOS } from 'src/app/models/cursos.data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/validators';
import { Event } from '@angular/router';

@Component({
  selector: 'aub-from-md',
  templateUrl: './from-md.component.html',
  styleUrls: ['./from-md.component.css']  
})
export class FromMdComponent implements OnInit {

  turnos: Array<MaestroDatos>;
  cursos: Array<MaestroDatos>;
  formMd: FormGroup;
  alumno: AlumnoModel;
  constructor(private formBuilder: FormBuilder) {

    this.turnos = TURNOS;
    this.cursos = CURSOS;

    this.iniForm();
    

  }

  ngOnInit() {
  }

  iniForm() {
    this.formMd = this.formBuilder.group(
      {
       nombre: ['', [Validators.required]],
       apellidos: ['', []],
       dni: ['', [
        Validators.required,
        Validators.minLength(9),
        Validators.pattern('^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$')]],
       passwd: ['', [ Validators.required ]],
       email: ['@sample.com', []] ,
       coments: ['', []],
       nacim: ['', []],
       isOk: ['', []],
       turno: ['', []],
       curso: ['', []],
      }
    );
    console.dir(this.formMd);

  }

  onSubmit(ev: Event): void {
    this.alumno = this.formMd.value;
    /*
    this.alumno= new AlumnoModel(
      this.formMd.get('nombre') +''+ this.formMd.get('apellidos'),
      ...
    );*/
    console.log(this.alumno);
    this.formMd.reset();


  }

}
