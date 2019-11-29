import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibrosModel } from 'src/app/models/libros.model';

@Component({
  selector: 'aub-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  fcLibros: FormControl;
  libros: Array<LibrosModel>;

  constructor() {
    this.initForm();
    this.libros = [] as LibrosModel[];
  }

  ngOnInit() {
  }

  initForm(): void {
    this.fcLibros = new FormControl();
  }

  onSearch(ev: Event): void {
    if(!this.fcLibros.value){
      return;
    }
    console.log('Buscando.. ', this.fcLibros.value);
  }

}