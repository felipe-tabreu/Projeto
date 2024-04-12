import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ClienteServiceService } from '../cliente-service.service';



@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {

  cliente = {
    nome: '',
    endereco: '',
    telefone: '',
    cpf: '',
    email: ''
  };

  constructor(private clienteService: ClienteServiceService) { }

  CadastrarCliente() {
    this.clienteService.CadastrarClienteService(this.cliente)
      .subscribe(
        response => {
          console.log('Usuário cadastrado com sucesso:', response);
          alert('Usuario Cadastrado com sucesso.');
          
        },
        error => {
          console.error('Erro ao cadastrar usuário:', error);
        }
      );
      this.cliente = {
        nome: '',
        endereco: '',
        telefone: '',
        cpf: '',
        email: ''
      };
  }


}