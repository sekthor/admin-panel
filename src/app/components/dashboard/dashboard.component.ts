import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private jwtService: JwtService
  ) { }

  ngOnInit(): void {
  }

  validate() {
    console.log(this.jwtService.getUsername())
  }

}
