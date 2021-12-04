import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  accessToken = "";
  refreshToken = "";

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  login() {
   this.loginService.getTokens(this.username, this.password).subscribe(
     response => {
       this.accessToken = response.access_token;
       this.refreshToken = response.refresh_token;
     }
   )
  }

}
