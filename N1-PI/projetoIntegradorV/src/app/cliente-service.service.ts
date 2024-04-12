import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private apiUrl = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) { }

  CadastrarClienteService(cliente: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, cliente)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}
