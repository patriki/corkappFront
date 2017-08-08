import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CorkComponent } from './components/cork/cork.component';
import { NoteTxtComponent } from './components/note-txt/note-txt.component';

import { CorkService } from './services/cork.service';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { routes } from './app.routing';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  declarations: [
    AppComponent,
    CorkComponent,
    NoteTxtComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularDraggableModule
  ],
  providers: [
    CorkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
