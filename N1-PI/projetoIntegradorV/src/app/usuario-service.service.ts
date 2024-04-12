// usuario.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}
