import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChamadosComponent } from './chamados/chamados.component';
import { AbrirChamadoComponent } from './abrir-chamado/abrir-chamado.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { UsuarioComponent } from './usuario/usuario.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ChamadosComponent,
    AbrirChamadoComponent,
    LoginComponent,
    UsuarioComponent,
    CadUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
