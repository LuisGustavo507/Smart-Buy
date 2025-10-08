import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../environment/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly url = 'http://localhost:8080/produto';
  constructor(private http: HttpClient) { }

  buscar(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }
}
