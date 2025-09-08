
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})

export class LoginFormComponent implements OnInit, OnDestroy {
  formulario!: FormGroup;
  details!: string[];

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    public configDialog: DynamicDialogConfig, 
  ){}

  ngOnInit() {    
    this.formulario = this.formBuilder.group({
      nome: [null],
      senha: [null]
    });
  }

    onSubmit(){
    this.loginService.logar(this.formulario)
     .subscribe({
      error: (error) => {
        this.retornaDetails("error","Erro",error.message); 
      },
      complete: () => {
        this.retornaDetails("success","Sucesso","Logado com sucesso!"); 
      }
     });   
    }


    //Usado para emitir pop-up no componente principal com base no que retornou do loginService.logar()
    retornaDetails(severity: string, summary: string, detail: string){
      this.details = [severity,summary,detail];
      this.configDialog.data.callback(this.details);    
    }

  ngOnDestroy(){

  }
}

