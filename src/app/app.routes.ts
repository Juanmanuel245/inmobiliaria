import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EmpresaComponent } from './components/empresa/empresa.component';

const app_routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true});
