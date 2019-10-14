import { Injectable } from '@angular/core';
import { Chamados } from '../chamados/chamados';

@Injectable({
  providedIn: 'root'
})
export class AbrirChamadoService {

  Chamados = Chamados;

  constructor() { }

  abrirChamado(chamado: any) {
    this.Chamados.push(chamado);
  }

  getChamados() {
    return this.Chamados;
  }

}
