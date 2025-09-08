
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
    public dynamicDialogService: DynamicDialogConfig, 
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

      },
      complete: () => {

      }
     });
      this.retornaDetails("error","Erro","deu erro la"); 
    }

    retornaDetails(severity: string, summary: string, detail: string){
      console.log("chegou na funcao retornadetails")
      this.details = [severity,summary,detail];
        this.dynamicDialogService.data.callback(this.details);
      
    }

  ngOnDestroy(){
    // this.ref.close({resonse: this.response, detail: this.detail});
    console.log("Chegou no ngOnDestroy"); 
  }
}

