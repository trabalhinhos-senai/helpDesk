import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbrirChamadoComponent } from './abrir-chamado/abrir-chamado.component';
import { ChamadosComponent } from './chamados/chamados.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: 'abrir-chamado', component: AbrirChamadoComponent, canActivate: [AuthGuard] },
  { path: 'chamados', component: ChamadosComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/chamados', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
