import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  usuario: any = new Object();
  
  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.usuario = this.usuarioService.getUsuarioById(id);

    console.log(this.usuarioService.getUsuarioById(id))
  }

}
