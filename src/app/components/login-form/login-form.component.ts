import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [DynamicDialogConfig,DynamicDialogRef]
})
export class LoginFormComponent {
   constructor(
    private dialogRef: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig
  ){}

  closeModal(){
    this.dialogRef.close();
  }
}
