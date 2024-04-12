import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioLogado: any = null; // Armazena as informações do usuário logado

  constructor() {}

  fazerLogin(usuario: any): void {
    // Lógica de autenticação, armazenamento de informações do usuário logado, etc.
    this.usuarioLogado = usuario;
  }

  fazerLogout(): void {
    // Lógica para fazer logout, limpar as informações do usuário logado, etc.
    this.usuarioLogado = null;
  }

  getUsuarioLogado(): any {
    // Retorna as informações do usuário logado
    return this.usuarioLogado;
  }

  setUsuario(usuario: any): void {
    // Define o usuário logado
    this.usuarioLogado = usuario;
  }

  // Método para obter o usuário logado
  getUsuario(): any {
    return this.usuarioLogado;
  }
}
