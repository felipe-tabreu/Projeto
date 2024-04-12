import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service'; // Importe o serviço de autenticação

// Definição da interface Usuario
interface Usuario {
  id: number;
  cpf: string;
  senha: string;
  admin: boolean;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  usuarioLogado: Usuario | null = null; // Variável para armazenar o usuário logado

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // Obter o usuário logado ao inicializar o componente
    this.usuarioLogado = this.authService.getUsuario();
  }

  fazerLogout(): void {
    // Fazer logout e redirecionar para a página de login
    this.authService.setUsuario(null);
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    // Verificar se o usuário logado é um administrador
    return this.usuarioLogado !== null && this.usuarioLogado.admin;
  }

  entrarCadUsuario(): void {
    // Verifica se o usuário logado é administrador e redireciona para a página de criação de usuário
    if (this.isAdmin()) {
      this.router.navigate(['/cadastro-usuario']);
    } else {
      alert('Acesso negado: Você não tem permissão para criar usuários.');
    }
  }

  entrarCadCliente(): void {

      this.router.navigate(['/cadastro-cliente']);
    } 

  entrarCadRevisao(): void {

      this.router.navigate(['/cadastro-revisao']);
    } 

  entrarCadVeiculo(): void {

      this.router.navigate(['/cadastro-veiculo']);
    }   

  }



