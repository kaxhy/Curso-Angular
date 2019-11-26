import { Component, OnInit, Input } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'aub-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: TareaModel;
  papelera: IconDefinition ;
  
  constructor() {
    // falso this.tarea = new TareaModel('prueba');
    this.papelera = faTrashAlt;
  }

  ngOnInit() {
  }
  onEditTarea(ev: Event): void {

  }
  onModTarea(tarea: TareaModel): void {

  }
  onChange(tarea: TareaModel): void {

  }
  onRemoveTarea(tarea: TareaModel): void {

  }

}
