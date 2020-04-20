import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverId: number;
  isAllowEdit = false;

  constructor(
    private serversService: ServersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.serverId = +paramMap.get('id');
      this.server = this.serversService.getServer(this.serverId);
    });

    this.activatedRoute.queryParamMap.subscribe((queryParam: ParamMap) => {
      this.isAllowEdit = queryParam.get('isAllowEdit') === 'true';
    });
  }

}
