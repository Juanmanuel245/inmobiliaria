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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    EmpresaComponent,
    PropiedadComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
