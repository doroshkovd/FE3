import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { LoginUser } from "../../auth/user";
import { AuthService } from "../../auth/auth.service";

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
