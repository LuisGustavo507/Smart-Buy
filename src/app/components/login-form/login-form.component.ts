
import { Component, OnDestroy, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
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

  //Existem validator sincronos e assincronos é importante saber diferencia-los e saber quando usar cada um
  ngOnInit() {    
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[^0-9\u00C0-\u017F\W]+$/)], []],
      senha: ['',[Validators.required,Validators.maxLength(15), Validators.pattern(/^[^\u00C0-\u017F\W]+$/)], []]
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

