import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aub-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent implements OnInit {
  fcNombreTarea: FormControl;
  newTarea: TareaModel;
  @Output() addTarea: EventEmitter<TareaModel>;
  constructor() {
    this.addTarea = new  EventEmitter();
   }

  ngOnInit() {
    this.fcNombreTarea = new FormControl();
  }

  onSendAdd(eve: Event): void{
    if ( !this.fcNombreTarea.value ) { return; }
    this.newTarea = new TareaModel(
      this.fcNombreTarea.value,
      false
    );
    this.addTarea.next(this.newTarea);
  }
}
