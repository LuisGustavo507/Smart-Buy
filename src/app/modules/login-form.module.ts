import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { HttpClientModule } from "@angular/common/http";
import { ToastModule } from 'primeng/toast';




@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    ToastModule
  ]
})
export class LoginFormModule { }
