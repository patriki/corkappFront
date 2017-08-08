import { Routes } from '@angular/router';

import { CorkComponent } from './components/cork/cork.component';
import { NoteTxtComponent } from './components/note-txt/note-txt.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cork', component: CorkComponent },
  { path: 'note-txt', component: NoteTxtComponent }
];
