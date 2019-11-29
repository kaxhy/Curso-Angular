import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { MockComponent } from './mock/mock.component';
import { SharedModule } from '../shared/shared.module';
import { GoogleComponent } from './google/google.component';


@NgModule({
  declarations: [LibrosComponent, MockComponent, GoogleComponent],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    SharedModule
  ]
})
export class LibrosModule { }
