import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { SimpleComponent } from './simple/simple.component';
import { PlusComponent } from './plus/plus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NuevaComponent } from './nueva/nueva.component';
import { TareaComponent } from './tarea/tarea.component';

@NgModule({
  declarations: [MainComponent, MenuComponent, SimpleComponent, PlusComponent, NuevaComponent, TareaComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CommonModule,
    TareasRoutingModule
  ],
  exports: []
})
export class TareasModule { }
