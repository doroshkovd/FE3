import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UsersService } from "../../shared/services/users/users.service";
import { LoggerService } from "../../shared/services/logger/logger.service";
import { Subscription } from "rxjs";
import { TOKEN } from "../../shared/token";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, OnDestroy {
  users: User[];
  subscription: Subscription;
  constructor(
    private logger: LoggerService,
    private usersService: UsersService,
    @Inject(TOKEN) config: any,
    ) {
    console.log(config);
  }

  ngOnInit(): void {
    this.subscription = this.usersService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
        // (this.logger as BetterLoggerService).dir(this.users);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
