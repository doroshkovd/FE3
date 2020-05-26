import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth/auth.service";
import { RouterOutlet } from "@angular/router";
import { routeAnimations } from "./app.animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent implements OnInit {
  isDisabled = false;
  title = 'test-app';
  activePage = 'cars';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
