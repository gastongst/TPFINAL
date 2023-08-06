import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { TestimoniosComponent } from './componentes/testimonios/testimonios.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { PiepaginaComponent } from './componentes/piepagina/piepagina.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    BlogComponent,
    ClientesComponent,
    EquipoComponent,
    TestimoniosComponent,
    ContactoComponent,
    PiepaginaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
