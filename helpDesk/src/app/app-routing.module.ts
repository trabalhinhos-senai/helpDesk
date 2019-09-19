import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbrirChamadoComponent } from './abrir-chamado/abrir-chamado.component';
import { ChamadosComponent } from './chamados/chamados.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'abrir-chamado', component: AbrirChamadoComponent, data: { title: 'Abrir Chamado' } },
  { path: 'chamados', component: ChamadosComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
