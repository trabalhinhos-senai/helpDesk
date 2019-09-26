import { Component, OnInit } from '@angular/core';
import { Usuario } from '../login/usuario';
import { CadUsuarioService } from './cad-usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private cadUsuarioService: CadUsuarioService) { }

  ngOnInit() {
  }
  
  onSubmit(formulario: NgForm) {
    if (formulario.valid) {
      console.log(this.usuario)
      this.cadUsuarioService.cadastrar(this.usuario);
    }
  }

}
