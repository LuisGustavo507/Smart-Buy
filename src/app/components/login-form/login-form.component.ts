
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [DynamicDialogConfig,DynamicDialogRef,DynamicDialogRef]
})

export class LoginFormComponent implements OnInit, OnDestroy {
  @Output() detalhesResposta: EventEmitter<string[]> = new EventEmitter(); 
  formulario!: FormGroup;
  details!: string[];
  severity!: string;
  summary!: string;
  detail!: string;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    public ref: DynamicDialogRef
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
          // this.severity = "error";
          // this.summary = "Erro:";
          // this.detail = error.message;
          // this.details = [this.severity,this.summary,this.detail];
          // this.detalhesResposta.emit(this.details);
          // console.log(this.details);
      },
      complete: () => {
          // this.severity = "success";
          // this.summary = "Sucesso";
          // this.detail = "Logado!";
          // this.details = [this.severity,this.summary,this.detail];
          // this.detalhesResposta.emit(this.details);
      }
     });
    }

  ngOnDestroy(){
    // this.ref.close({resonse: this.response, detail: this.detail});
    console.log("Chegou no ngOnDestroy"); 
  }
}

