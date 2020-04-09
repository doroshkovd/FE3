import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isShow = true;
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onAddServer(server) {
    console.log(server);
    this.serverElements = [...this.serverElements, server];
    setTimeout(() => {this.isShow = false}, 2000);
  }

  onAddMirror(server) {
    console.log(server);
    this.serverElements = [...this.serverElements, server];
  }
}
