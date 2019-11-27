import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(es, 'es');


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, /* Este si es reactivo yua no es necesario. */
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule,
    NgbModule,
    SharedModule,

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'} /* cambia el valor por defecto a español, no sobra en pipes*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
