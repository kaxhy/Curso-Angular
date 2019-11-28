import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { EditTareaIf } from 'src/app/models/edit-tarea.interface';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { TareasStoreService } from 'src/app/services/tareas-store.service';

@Component({
  selector: 'aub-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent implements OnInit {
  tareas: Array<TareaModel>;
  @ViewChild('confirmar', {static: true}) confirmar: ElementRef;
  papelera: IconDefinition ;

  constructor(private tareasStoreService: TareasStoreService) {
    this.papelera = faTrashAlt;
  }

  ngOnInit() {
    this.tareas =  this.tareasStoreService.getTareas();
    // ( JSON.parse(localStorage.getItem(this.storeName)) || [] ) as TareaModel[];
  }

  onAddTarea(tarea: TareaModel): void {
    this.tareas.push(tarea);
    this.actualizarStore();
  }

  sendData(item: TareaModel): TareaModel{
    return {...item};
  }

  onChangeTarea(i: number): void {
    this.tareas[i].isCompleted = !this.tareas[i].isCompleted;
    this.actualizarStore();
  }

  onEditTarea( item: EditTareaIf): void {
    this.tareas[item.i].nombre = item.nombre;
    this.actualizarStore();
  }

  onDeleteTarea(i: number): void {
    this.tareas.splice(i, 1);
    this.actualizarStore();
  }

  onConfirmTareas(): void {
    this.confirmar.nativeElement.showModal();
  }

  onDeleteTareas(confirma): void {
    if (confirma) {
      this.tareas = [] as TareaModel[];
      this.tareasStoreService.removeTareas();
    }
    this.confirmar.nativeElement.close();
  }

  private actualizarStore(): void {
    this.tareasStoreService.setTareas(this.tareas);
    // localStorage.setItem(this.storeName, JSON.stringify(this.tareas));
  }
}
