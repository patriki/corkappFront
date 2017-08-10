import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: Object = {
    username: '',
    password: '',
    email: ''
  }

  error = null;

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signup() {
    this.session.signup(this.user).subscribe(
      (data) => {
        this.router.navigate(['/login']);
      },
      (err) => {
        this.error = err;
      });
  }

}
