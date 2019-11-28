import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  /*{ path: 'home', component: HomeComponent },*/
  { path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'tareas',
      loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasModule) },
  { path: 'cursos',
      loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  /*{ path: 'about', loadChildren: './about/about.module#AboutModule' }, /* Antiguo */
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
