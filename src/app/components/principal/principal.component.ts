import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {
  DialogService,
  DynamicDialogRef,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { LoginFormComponent } from '../login-form/login-form.component';
import { MessageService } from 'primeng/api';
import { Produto } from 'src/app/environment/produto.interface';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [
    DialogService,
    DynamicDialogRef,
    DynamicDialogConfig,
    MessageService,
  ],
})
export class PrincipalComponent {
  ref!: DynamicDialogRef;
  menuItems!: MenuItem[];
  estaLogado: boolean = false;
  produtos: Produto[] = [];

  constructor(
    public dialogService: DialogService,
    private messagemService: MessageService,
    private produtoService: ProdutoService
  ) {}

  //O parametro "data" é passado como um objeto para o component que foi chamado.
  //Nessa caso ele passa uma função de callback que quando necessário o component/modal login irá enviar dados de volta
  showLoginModal() {
    this.ref = this.dialogService.open(LoginFormComponent, {
      header: 'Realizar Login',
      contentStyle: { 'max-height': '700px', overflow: 'auto' },
      data: {
        callback: (details: string[], logado: boolean) => {
          this.messagemService.add({
            severity: details[0],
            summary: details[1],
            detail: details[2],
            key: 'toast',
          });
          if(details[2] == 'Logado com sucesso!'){this.estaLogado = true}
        },
      },
    });
  }

  showPerfilModal(){}

  ngOnInit() {
    if(localStorage.getItem("token")){
        this.estaLogado = true;
    }

    this.produtoService.buscar().subscribe({
      error: (error) =>{
        console.log(error);
      },
      next: (response: Produto[]) => {
        console.log('antes de entrar no forEach', response[0]);
        response.forEach((produto, indice) => {
          this.produtos[indice] = produto;
        });
      },
      complete: () =>{
        console.log('requisição completa');
        console.log(this.produtos);
      }
    });

    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Contato',
        icon: 'pi pi-phone',
        routerLink: '/teste'
      },
    ];
  }
}
