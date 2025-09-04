import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly url = "http://localhost:8080/login";

  constructor(
    private http: HttpClient
  ){ }

  logar(formulario: FormGroup): Observable<any>{
    console.log(formulario.value);
   return this.http.post(this.url, formulario.value);
  }
}


