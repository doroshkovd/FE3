import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  servers: string[];
  constructor() { }

  ngOnInit(): void {
  }

  addServer() {
    this.servers.push(`Server #${this.servers.length + 1}`)
  }

}
