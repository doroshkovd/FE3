import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { AuthService } from "../services/auth/auth.service";
import { LoginUser } from "../services/auth/user";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = false;
  $user = this.authService.user;
  userEmail: string;
  userEmailSubscription: Subscription;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.user
      .subscribe((user: LoginUser) => {
        if (!!user) {
          this.userEmail = user.email;
        }
      });
  }

  onLogout() {
    this.authService.logout();
    return false;
  }

  ngOnDestroy(): void {
    this.userEmailSubscription.unsubscribe();
  }
}
