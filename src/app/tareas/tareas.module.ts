import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { SimpleComponent } from './simple/simple.component';
import { PlusComponent } from './plus/plus.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainComponent, MenuComponent, SimpleComponent, PlusComponent],
  imports: [
    FormsModule,
    CommonModule,
    TareasRoutingModule
  ],
  exports: []
})
export class TareasModule { }
