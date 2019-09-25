import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbrirChamadoComponent } from './abrir-chamado/abrir-chamado.component';
import { ChamadosComponent } from './chamados/chamados.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard';
import { UsuarioComponent } from './usuario/usuario.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component'

const routes: Routes = [
  { path: 'abrir-chamado', component: AbrirChamadoComponent/*, canActivate: [AuthGuard]*/ },
  { path: 'chamados', component: ChamadosComponent/*, canActivate: [AuthGuard]*/ },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'cad-usuario', component: CadUsuarioComponent },
  { path: '', redirectTo: '/chamados', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
