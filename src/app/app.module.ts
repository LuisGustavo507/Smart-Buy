import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    CommonModule,
    MenubarModule,
    ButtonModule
    
  ],
  providers: [DynamicDialogModule], //providers, indicam que o objeto passado ali se refere a uma unica instancia do
  bootstrap: [AppComponent]         // objeto que pode ser injetada em subclasses da classe mae.
})
export class AppModule { }
