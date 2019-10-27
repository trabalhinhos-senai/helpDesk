import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbrirChamadoComponent } from './abrir-chamado/abrir-chamado.component';
import { ChamadosComponent } from './chamados/chamados.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard';
import { UsuarioComponent } from './usuario/usuario.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CadClienteComponent } from './cad-cliente/cad-cliente.component'
import { ChamadoDetailComponent } from './chamado-detail/chamado-detail.component';

const routes: Routes = [
  { path: 'abrir-chamado', component: AbrirChamadoComponent/*, canActivate: [AuthGuard]*/ },
  { path: 'chamados', component: ChamadosComponent/*, canActivate: [AuthGuard]*/ },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'cad-usuario', component: CadUsuarioComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'cad-cliente', component: CadClienteComponent },
  { path: 'chamado-detalhe/:id', component: ChamadoDetailComponent },
  { path: '', redirectTo: '/chamados', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
