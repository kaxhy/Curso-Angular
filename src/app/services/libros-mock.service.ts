import { Injectable } from '@angular/core';
import { LibrosModule } from '../libros/libros.module';
import { LIBROS } from '../models/libros.data';
import { LibrosModel } from '../models/libros.model';

@Injectable({
  providedIn: LibrosModule
})
export class LibrosMockService {

  constructor() { }

  getSearchLibros(item: string): Array<LibrosModel> {
    return LIBROS;
  }
  getSearchLibrosAsinc(item: string): Promise<Array<LibrosModel>> {
    return new Promise((resolve,reject)=>{

      return
    });
  }
}
