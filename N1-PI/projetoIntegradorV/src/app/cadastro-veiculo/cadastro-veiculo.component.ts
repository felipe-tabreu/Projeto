import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.css']
})
export class CadastroVeiculoComponent {
  selectedMarca: string = '';
  selectedModelo: string = '';
  modelos: string[] = [];
  anos: number[] = []; // Nova propriedade para armazenar os anos disponíveis

  constructor() {
    // Obtém o ano atual
    const anoAtual = new Date().getFullYear();
    
    // Define o número de anos para exibir no select
    const anosParaExibir = 25;

    // Adiciona os anos à lista
    for (let i = anoAtual; i >= anoAtual - anosParaExibir; i--) {
        this.anos.push(i);
    }
  }

  atualizarModelos() {
    if (this.selectedMarca === 'Fiat') {
      this.modelos = ['Palio', 'Uno', 'Fiorino'];
    } else if (this.selectedMarca === 'Chevrolet') {
      this.modelos = ['Onix', 'Prisma', 'Cruze'];
    } else {
      this.modelos = [];
    }
  }
}
