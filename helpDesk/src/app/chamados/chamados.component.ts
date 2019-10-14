import { Component, OnInit } from '@angular/core';
import { Chamados } from './chamados';
import { AbrirChamadoService } from '../abrir-chamado/abrir-chamado.service';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css']
})
export class ChamadosComponent implements OnInit {

  Chamados = Chamados;

  constructor(private chamadoService: AbrirChamadoService) { }

  ngOnInit() {
    this.Chamados = this.chamadoService.getChamados()
  }

}
