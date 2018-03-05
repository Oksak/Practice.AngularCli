import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCriationStatus = 'No server created';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreteServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCriationStatus = 'Server was created! Name is ' + this.serverName ;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
