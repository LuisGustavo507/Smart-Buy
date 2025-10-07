import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { TokenResponse } from '../environment/token.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly url = 'http://localhost:8080/login';
  public res!: Observable<TokenResponse>;
  private token!: TokenResponse;
  constructor(private http: HttpClient) {}

  logar(formulario: FormGroup): Observable<TokenResponse> {
    //, {responseType: 'text' as 'json'} caso retorne em text
    const token = this.http.post<TokenResponse>(this.url, formulario.value);
    console.log("meu toke,",token);
    this.res = token;
    return this.res;

  }
}
