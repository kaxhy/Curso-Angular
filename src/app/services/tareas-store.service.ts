import { Injectable } from '@angular/core';
import { TareaModel } from '../models/tarea.model';
import { isArray } from 'util';

@Injectable({
  providedIn: 'root'
})
export class TareasStoreService {
  storeName: string;
  constructor() {
    this.storeName = 'Tareas';
  }

  getTareas(): Array<TareaModel> {
    // JSON.parse(localStorage.getItem(this.storeName)) || [] as TareaModel[];
    let res: TareaModel[] = JSON.parse(localStorage.getItem(this.storeName));
    if (!Array.isArray(res)) {
      res = [] as TareaModel[];
    }
    return res;
  }

  setTareas(datos: TareaModel[]): void {
    localStorage.setItem(this.storeName, JSON.stringify(datos));
  }

  removeTareas(): void {
    localStorage.removeItem(this.storeName);
  }

}
