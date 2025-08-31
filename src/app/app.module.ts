import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule} from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginFormModule } from './modules/login-form.module';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    LoginFormModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    MenubarModule 
  ],
  providers: [DynamicDialogModule], //providers, indicam que o objeto passado ali se refere a uma unica instancia do
  bootstrap: [AppComponent]         // objeto que pode ser injetada em subclasses da classe mae.
})
export class AppModule { }
