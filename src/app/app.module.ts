import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CorkComponent } from './component/cork/cork.component';
import { NoteTxtComponent } from './components/note-txt/note-txt.component';

@NgModule({
  declarations: [
    AppComponent,
    CorkComponent,
    NoteTxtComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
