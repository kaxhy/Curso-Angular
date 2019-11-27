import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaludoRxComponent } from './saludo-rx/saludo-rx.component';
import { SaludoRefComponent } from './saludo-ref/saludo-ref.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent, SaludoComponent, SaludoRxComponent, SaludoRefComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    SharedModule
  ],
  exports: []
})
export class HomeModule { }
