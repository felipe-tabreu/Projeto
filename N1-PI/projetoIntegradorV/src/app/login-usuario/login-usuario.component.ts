import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service'; // Importe o serviço de autenticação

interface Usuario {
  id: number;
  cpf: string;
  senha: string;
}

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {

  cpf: string = '';
  senha: string = '';

  usuarios: Usuario[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService // Injete o serviço de autenticação
  ) {}

  ngOnInit() {
    // Carregar a lista de usuários ao inicializar o componente
    this.http.get<Usuario[]>('http://localhost:8080/pessoas')
      .subscribe(
        usuarios => {
          this.usuarios = usuarios;
        },
        error => {
          console.error('Erro ao carregar usuários:', error);
        }
      );
  }

  doLogin(): void {
    // Verificar se há um usuário com o CPF e senha fornecidos
    const usuario = this.usuarios.find(u => u.cpf === this.cpf && u.senha === this.senha);
    if (usuario) {
      this.authService.setUsuario(usuario); // Armazena o usuário logado no serviço de autenticação
      this.router.navigate(['/nav-bar']); // Redireciona para a rota da NavBar se o login for bem-sucedido
    } else {
      alert('CPF ou senha incorretos');
    }
  }
}
