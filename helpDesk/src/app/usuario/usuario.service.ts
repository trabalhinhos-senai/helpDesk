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

  getUsuarioById(id: string) {
    
    for (let i = 0; i < this.Usuarios.length; i++) {
      const usuario = this.Usuarios[i];

      if (usuario.id === id) {
        return usuario;
      }   
    }    
  }
}
