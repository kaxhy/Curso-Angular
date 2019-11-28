import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { FromTdComponent } from './from-td/from-td.component';
import { FromMdComponent } from './from-md/from-md.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CursosComponent, FromTdComponent, FromMdComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ]
})
export class CursosModule { }
