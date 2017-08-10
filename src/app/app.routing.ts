import { Routes } from '@angular/router';

import { CorkComponent } from './components/cork/cork.component';
import { CorksComponent } from './components/corks/corks.component';
import { NoteTxtComponent } from './components/note-txt/note-txt.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SessionService } from './services/session.service';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'corks', component: CorksComponent, canActivate: [SessionService] },
  { path: 'corks/:id', component: CorkComponent, canActivate: [SessionService] },
  { path: 'note-txt', component: NoteTxtComponent, canActivate: [SessionService] }
];
