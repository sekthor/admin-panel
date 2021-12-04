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

  errorMsg: string = "";

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (!this.isFormValid()) return;

    this.loginService.login(this.username, this.password).subscribe(
      response => {
        this.accessToken = response.access_token;
        this.refreshToken = response.refresh_token;
      },
      error => {
        this.errorMsg = "Invalid credentials";
      } 
    )
  }

  isFormValid(): boolean {
    if (!this.username) {
      this.errorMsg = "Empty username";
      return false;
    }

    if (!this.password) {
      this.errorMsg = "Empty password";
      return false;
    }
    return true; 
  }

}
