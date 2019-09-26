import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuarios } from '../cad-usuario/usuarios';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  Usuarios = Usuarios;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.Usuarios = this.usuarioService.getUsuarios();
  }

}
