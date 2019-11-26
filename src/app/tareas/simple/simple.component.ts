import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aub-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  tareas: Array<TareaModel>;
  newTarea: TareaModel;
  // tarea:Tareaif;

  constructor() {
    this.tareas = [] as TareaModel[];
    this.newTarea = new TareaModel();
    // this.tarea = {} as Tareaif;
  }

  ngOnInit() {
  }

  addTareas(ev: Event): void {
    if (!this.newTarea.nombre) {
      return;
    }
    this.tareas.push({... this.newTarea});
    this.newTarea =  new TareaModel();
    console.log(this.tareas);
  }

}
