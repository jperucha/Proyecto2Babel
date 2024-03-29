import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: InicioComponent },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
  { path: 'competiciones', loadChildren: './competiciones/competiciones.module#CompeticionesModule'},
  { path: 'centros', loadChildren: './centros/centros.module#CentrosModule'},
  { path: 'about', loadChildren: './about/about.module#AboutModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
