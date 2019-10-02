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
      console.log(this.usuario)

      if (this.usuario.senha === this.confirmarSenha) {

        //console.log(this.confirmarSenha)
        this.cadUsuarioService.cadastrar(this.usuario);
        
        formulario.reset();
        
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
