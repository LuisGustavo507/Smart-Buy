
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [DialogService,DynamicDialogRef]
})
export class PrincipalComponent {
    ref: DynamicDialogRef | any;
    menuItems: MenuItem[] | undefined;

    constructor(
        public dialogService: DialogService
    ){}
    
    showLoginModal(){
        this.ref = this.dialogService.open(LoginFormComponent, {
            header: 'Realizar Login',
            width: '50%',
            contentStyle: { 'max-height': '700px', overflow: 'auto' },
        });
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
