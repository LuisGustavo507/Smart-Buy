
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef, DynamicDialogConfig} from 'primeng/dynamicdialog';
import { LoginFormComponent } from '../login-form/login-form.component';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [DialogService,DynamicDialogRef,MessageService,DynamicDialogConfig]
})
export class PrincipalComponent {
    ref: DynamicDialogRef | any;
    menuItems: MenuItem[] | undefined;

    constructor(
        public dialogService: DialogService,
        private messagemService: MessageService
    ){}
    
    showLoginModal(){
        this.ref = this.dialogService.open(LoginFormComponent, {
            header: 'Realizar Login',
            contentStyle: { 'max-height': '700px', overflow: 'auto', },
            data: {
                callback: (details: string[]) => {       
                    this.show();
                    console.log("pai recebeu: ", details);
                }
            }
        });

    }
        show() {
        this.messagemService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    ngOnInit() {
      this.menuItems = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Contato',
                icon: 'pi pi-phone'
            },
            {
                label: 'Categorias',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Components',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server'
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil'
                    },
                    {
                        label: 'Templates',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Apollo',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Ultima',
                                icon: 'pi pi-palette'
                            }
                        ]
                    }
                ]
            },
        ]
    }
}
