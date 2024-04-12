import { Component } from '@angular/core';
import { UsuarioService } from '../usuario-service.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {

  usuario = {
    nome: '',
    senha: '',
    endereco: '',
    telefone: '',
    cpf: '',
    email: '',
    admin: 'false'
  };

  constructor(private usuarioService: UsuarioService) { }

  cadastrar() {
    this.usuarioService.cadastrarUsuario(this.usuario)
      .subscribe(
        response => {
          console.log('Usuário cadastrado com sucesso:', response);
          alert('Usuario Cadastrado com sucesso.');
          
        },
        error => {
          console.error('Erro ao cadastrar usuário:', error);
        }
      );
      this.usuario = {
        nome: '',
        senha: '',
        endereco: '',
        telefone: '',
        cpf: '',
        email: '',
        admin: ''
      };
  }

  // Método para limpar os campos do formulário



}

