import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EntradasComponent } from './entradas/entradas.component';
import { PaginaComponent } from './pagina/pagina.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [BlogComponent, FormularioComponent, EntradasComponent, PaginaComponent]
})
export class BlogModule { }