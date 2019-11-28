import { Component, OnInit } from '@angular/core';
import { MaestroDatos } from 'src/app/models/alumno-model';
import { TURNOS, CURSOS } from 'src/app/models/cursos.data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/validators';

@Component({
  selector: 'aub-from-md',
  templateUrl: './from-md.component.html',
  styleUrls: ['./from-md.component.css']  
})
export class FromMdComponent implements OnInit {

  turnos: Array<MaestroDatos>;
  cursos: Array<MaestroDatos>;
  formMd: FormGroup;

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
       passwd: ['', [
         Validators.required,
         Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
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

}
