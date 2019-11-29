import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Event } from '@angular/router';
import { LibrosModel } from 'src/app/models/libros.model';
import { LIBROS } from 'src/app/models/libros.data';
import { LibrosMockService } from 'src/app/services/libros-mock.service';

@Component({
  selector: 'aub-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent implements OnInit {

  fcLibros: FormControl;
  libros: Array<LibrosModel>;

  constructor(private librosMockService: LibrosMockService) {
    this.initForm();
    this.libros = [];
  }

  ngOnInit() {
  }

  initForm(): void {
    this.fcLibros = new FormControl();
  }

  onSearch(ev: Event): void {
    if(!this.fcLibros.value) {
      return;
    }
    console.log('Buscando.. ', this.fcLibros.value);
    this.libros = LIBROS;
    console.log(this.libros);
  }

  onSearchAsic(ev: Event): void {
    if(!this.fcLibros.value) {
      return;
    }
    console.log('Buscando Asic.. ', this.fcLibros.value);
     this.librosMockService.getSearchLibrosAsinc(this.fcLibros.value).then( 
      ()this.libros = 
     );
  }

}
