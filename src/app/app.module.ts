import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CorkComponent } from './components/cork/cork.component';
import { NoteTxtComponent } from './components/note-txt/note-txt.component';

import { CorkService } from './services/cork.service';

@NgModule({
  declarations: [
    AppComponent,
    CorkComponent,
    NoteTxtComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CorkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
