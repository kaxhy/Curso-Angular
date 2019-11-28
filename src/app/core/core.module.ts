import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SharedModule,
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
