import { Routes } from '@angular/router';

import { CorkComponent } from './components/cork/cork.component';
import { NoteTxtComponent } from './components/note-txt/note-txt.component';
import { LoginComponent } from './components/login/login.component';
import { SessionService } from './services/session.service';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cork', component: CorkComponent, canActivate: [SessionService] },
  { path: 'note-txt', component: NoteTxtComponent, canActivate: [SessionService] }
];
