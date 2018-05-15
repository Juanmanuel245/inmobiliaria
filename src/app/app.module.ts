import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { app_routing } from './app.routes';

// Servicios

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { PropiedadComponent } from './components/propiedad/propiedad.component';
import { AdminComponent } from './components/admin/admin.component';
import { NuevaComponent } from './components/admin/propiedades/nueva/nueva.component';
import { VerComponent } from './components/admin/propiedades/ver/ver.component';
import { EstadisticasComponent } from './components/admin/estadisticas/estadisticas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    EmpresaComponent,
    PropiedadComponent,
    AdminComponent,
    NuevaComponent,
    VerComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
