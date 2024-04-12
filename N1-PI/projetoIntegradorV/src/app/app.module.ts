import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { FraseLoginComponent } from './frase-login/frase-login.component';
import { TelaLoginComponent } from './Telas/tela-login/tela-login.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsuarioService } from './usuario-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth-service.service';
import { ClienteServiceService } from './cliente-service.service';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { CadastroRevisaoComponent } from './cadastro-revisao/cadastro-revisao.component';



// Definição das rotas
const routes: Routes = [
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'cadastro-cliente', component: CadastroClienteComponent },
  { path: 'cadastro-veiculo', component: CadastroVeiculoComponent },
  { path: 'cadastro-revisao', component: CadastroRevisaoComponent },
  { path: '', redirectTo: '/tela-login', pathMatch: 'full' },
  { path: '**', redirectTo: '/tela-login' }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    LoginUsuarioComponent,
    FraseLoginComponent,
    TelaLoginComponent,
    CadastroVeiculoComponent,
    NavBarComponent,
    CarrosselComponent,
    CadastroRevisaoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CadastroClienteComponent,
    FormsModule,
    RouterModule.forRoot(routes) // Importa o módulo de roteamento e define as rotas
  ],
  providers: [UsuarioService,AuthService,ClienteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
