import { Component, OnInit, Input,Output, EventEmitter, AfterContentInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { EditTareaIf } from 'src/app/models/edit-tarea.interface';


@Component({
  selector: 'aub-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit, AfterContentInit {
  @Input() tarea: TareaModel;
  @Input() i: number;
  @Output() onDelete: EventEmitter<number>;
  @Output() onChange: EventEmitter<number>;
  @Output() onEdit: EventEmitter<EditTareaIf>;
  papelera: IconDefinition ;
  
  constructor() {
    this.onDelete = new  EventEmitter();
    this.onChange = new  EventEmitter();
    this.onEdit = new EventEmitter();
    this.papelera = faTrashAlt;
    this.tarea = {... this.tarea} as TareaModel;
  }

  ngOnInit() {
    this.tarea.nombre = '';
  }

  ngAfterContentInit(){

  }

  onSendEditTarea(ev: any): void {
    const tareaEdit = {i: this.i, nombre : ev.target.textContent} as EditTareaIf;
    this.onEdit.next(tareaEdit);
  }
  onModTarea(ev: any): void {
    ev.target.previousElementSibling.setAttribute('contenteditable', true);
  }

  onSendChange(): void {
    this.onChange.next(this.i);
  }
  onSendDelte(): void {
    this.onDelete.next(this.i);
  }

}
