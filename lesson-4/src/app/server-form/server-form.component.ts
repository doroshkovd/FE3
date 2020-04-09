import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.scss']
})
export class ServerFormComponent implements OnInit {
  newServerName: string;
  newServerContent: string;

  @ViewChild('localNewServer', {static: true}) localNewServer: ElementRef;
  @ViewChild('localNewServer', {static: true}) localNewContent: ElementRef;
  @ViewChild('labelTest', {static: true}) labelTest: ElementRef;

  @Output() addNewServer: EventEmitter<any> = new EventEmitter<any>();
  @Output() addNewMirror: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(name, content) {
    this.addNewServer.emit({
      name: name,
      type: 'server',
      content: content,
    });
  }

  onAddMirror() {
    console.log(this.labelTest);
    const el = this.localNewServer.nativeElement;
    const el2 = this.localNewContent.nativeElement;

    this.addNewMirror.emit({
      name: el.value,
      type: 'mirror',
      content: el2.value,
    });
  }

}
