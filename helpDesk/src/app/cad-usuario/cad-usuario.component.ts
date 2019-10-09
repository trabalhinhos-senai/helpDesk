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
  public cadastrado = false;
  public confirmarSenha: String;

  constructor(private cadUsuarioService: CadUsuarioService) { }

  ngOnInit() {

  }

  onSubmit(formulario: NgForm) {
    if (formulario.valid) {


      if (this.usuario.senha === this.confirmarSenha) {

        console.log(this.usuario)
        this.cadUsuarioService.cadastrar(this.usuario);
        console.log(this.usuario.nome)

        this.showAlert();

      } else {
        console.log("não confere");
      }


    }
  }

  showAlert() {

    //aparecer caixa de mensagem
    this.cadastrado = true;

    //aguarda 3 Segundos e esconde
    setTimeout(function () {
      this.cadastrado = false;
      //console.log(this.cadastrado);
    }.bind(this), 3000);

  }

}
