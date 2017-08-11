import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { CorkService } from '../../services/cork.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Object = {
    username: '',
    password: ''
  }

  error = null;

  friend = "";

  constructor(
    private session: SessionService,
    private corkService: CorkService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.session.login(this.user).subscribe(
      (data) => {
        this.router.navigate(['/corks']);
      },
      (err) => {
        this.error = err;
      });
  }

  searchFriend(key) {
    if(key.keyCode === 13) {
      console.log(this.friend)
      this.corkService.getPublicCork({friend: this.friend}).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/corks/' + data]);
      })
    }
  }

}
