import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  loginLabel = 'Login';

  ngOnInit() {
    this.loginLabel = this.authService.isLogged ? 'Logout' : 'Login';
  }

  onServersClick() {
    this.router.navigate(['/servers']);
  }

  onAuth() {
    if (this.loginLabel === 'Login') {
      this.authService.login();
      this.loginLabel = 'Logout';
    } else {
      this.authService.logout();
      this.loginLabel = 'Login';
    }
  }

}
