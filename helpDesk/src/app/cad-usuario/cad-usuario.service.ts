import { Injectable } from '@angular/core';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class CadUsuarioService {
  
  Usuarios = Usuarios;

  constructor() { }

  cadastrar(usuario: any) {
    this.Usuarios.push(usuario);
  }
}
