import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {
  DialogService,
  DynamicDialogRef,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { LoginFormComponent } from '../login-form/login-form.component';
import { MessageService } from 'primeng/api';

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

  constructor(
    public dialogService: DialogService,
    private messagemService: MessageService
  ) {}

  //O parametro "data" é passado como um objeto para o component que foi chamado.
  //Nessa caso ele passa uma função de callback que quando necessário o component/modal login irá enviar dados de volta
  showLoginModal() {
    this.ref = this.dialogService.open(LoginFormComponent, {
      header: 'Realizar Login',
      contentStyle: { 'max-height': '700px', overflow: 'auto' },
      data: {
        callback: (details: string[]) => {
          this.messagemService.add({
            severity: details[0],
            summary: details[1],
            detail: details[2],
            key: 'toast',
          });
        },
      },
    });
  }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Contato',
        icon: 'pi pi-phone',
      },
      {
        label: 'Categorias',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
              },
            ],
          },
        ],
      },
    ];
  }
}
