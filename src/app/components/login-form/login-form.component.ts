
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [DynamicDialogConfig,DynamicDialogRef]
})

export class LoginFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ){}

  ngOnInit() {    
    this.formulario = this.formBuilder.group({
      nome: [null],
      senha: [null]
    });
  }

    onSubmit(){
     console.log(this.formulario.value);
     this.loginService.logar(this.formulario)
     .subscribe({
      error: (error) => console.log("ERRO: ",error),
      next: (response) => console.log("RESPSOTA: ",response)
     });
    }
}

