import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {

  errorMessage = 'Error happened here. Please reload';
  alertClass = 'alert alert-warning';

  constructor() { }

  ngOnInit(): void {
  }

  public getError(): string {
    return this.errorMessage;
  }

  public onClick(event, str) {
    console.log(event);
    console.log(str);
  }

}
