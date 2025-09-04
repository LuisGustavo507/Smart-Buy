import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly url = "localhost:8080/login";

  constructor(
    private http: HttpClient
  ){ }

  logar(formulario: FormGroup){
    this.http.post(this.url, formulario.value)
      .subscribe({
        next: dados => console.log("Sucesso"),
        error: dados => console.log("Erro")
      });
  }
}


