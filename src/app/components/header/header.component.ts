import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  loggedIn: boolean = false;
  username: string = "";

  constructor(
    private loginService: LoginService,
    private jwtService: JwtService
  ) { }

  ngOnInit(): void {
   this.getUsername() 
  }

  getUsername() {
    if (this.loginService.isLoggedIn())
      this.username = this.jwtService.getUsername();
  }

  

}
