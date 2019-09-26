import { Injectable } from '@angular/core';
import { Usuarios } from '../cad-usuario/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  Usuarios = Usuarios;

  constructor() { }

  getUsuarios() {
    return this.Usuarios;
  }

}
