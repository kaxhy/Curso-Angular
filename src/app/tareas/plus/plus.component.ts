import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aub-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent implements OnInit {
  tareas: Array<TareaModel>;
  storeName: string;
  constructor() {
    this.storeName = 'Tareas';
  }

  ngOnInit() {
    this.tareas = ( JSON.parse(localStorage.getItem(this.storeName)) || [] ) as TareaModel[];
  }

  onAddTarea(tarea: TareaModel): void{
    this.tareas.push(tarea);
    this.actualizarStore();
  }

  onDeleteTareas(status: boolean):void{
    
  }

  private actualizarStore(): void {
    localStorage.setItem(this.storeName, JSON.stringify(this.tareas));
  }
}
