import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { CanComponentDeactivate } from "../../services/servers/servers.guard";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverId: number;
  serverName = '';
  serverStatus = '';

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.serverId = +paramMap.get('id');
      this.server = this.serversService.getServer(this.serverId);
      if (this.server) {
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
      }
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.router.navigate(['/servers', this.server.id]);
  }

  canDeactivate() {
    return confirm('Do you really want to go from this page?');
  }

}
