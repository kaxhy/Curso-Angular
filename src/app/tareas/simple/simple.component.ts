import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { TareasStoreService } from 'src/app/services/tareas-store.service';

@Component({
  selector: 'aub-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  tareas: Array<TareaModel>;
  newTarea: TareaModel;
  // tarea:Tareaif;
  @ViewChild('confirmar', {static: true}) confirmar: ElementRef;
  papelera: IconDefinition ;
  isEditable: boolean;

  constructor(private tareasStoreService: TareasStoreService) {
    // this.tareas = [] as TareaModel[];
    this.newTarea = new TareaModel();
    this.papelera = faTrashAlt;

    // this.tarea = {} as Tareaif;
    this.isEditable = false;
  }

  ngOnInit() {

    this.tareas = this.tareasStoreService.getTareas();
    // ( JSON.parse(localStorage.getItem(this.storeName)) || [] ) as TareaModel[];

  }

  addTareas(ev: Event): void {
    if (!this.newTarea.nombre) {
      return;
    }
    this.tareas.push({... this.newTarea});
    this.newTarea =  new TareaModel();
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

  onChange(tarea: TareaModel ): void {
    console.log(tarea);
    this.actualizarStore();
  }

  onRemoveTarea(i: number): void {
   this.tareas.splice(i, 1);
   this.actualizarStore();
  }

  onModTarea(ev: any): void {
  this.isEditable = true;
  console.log(this.isEditable);
   // ev.target.previousElementSibling.setAttribute('contenteditable', true);
  }

  onEditTarea(ev: any, i: number): void {
    this.isEditable = false;
    this.tareas[i] = ev.target.textContent;
    this.actualizarStore();
  }

  private actualizarStore(): void {
    this.tareasStoreService.setTareas(this.tareas);
    // localStorage.setItem(this.storeName, JSON.stringify(this.tareas));
  }
}
