import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { CorkService } from './services/cork.service';
import { SessionService } from './services/session.service';
import { NoteTxtService } from './services/note-txt.service';

import { AppComponent } from './app.component';
import { CorkComponent } from './components/cork/cork.component';
import { NoteTxtComponent } from './components/note-txt/note-txt.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CorksComponent } from './components/corks/corks.component';

import { AngularDraggableModule } from 'angular2-draggable';
import { ModalComponent } from './components/note-txt/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    CorkComponent,
    NoteTxtComponent,
    SignupComponent,
    LoginComponent,
    CorksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    AngularDraggableModule
  ],
  providers: [
    CorkService,
    SessionService,
    NoteTxtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
