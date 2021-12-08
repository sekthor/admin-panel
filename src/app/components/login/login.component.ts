import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
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
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.loginService.isLoggedIn())
      this.router.navigate(["/dashboard"]);
  }

  login() {
    if (!this.isFormValid()) return;

    this.loginService.login(this.username, this.password).subscribe(
      isLoggedin => {
        if (isLoggedin)
          this.router.navigate(["/dashboard"]);
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
