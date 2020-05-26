import { Component, OnInit } from "@angular/core";
import { ErrorsService } from "./errors.service";
import { CustomError } from "./error.interface";
import { errorOnOf } from "./errors.animations";

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['errors.component.scss'],
  animations: [errorOnOf]
})
export class ErrorsComponent implements OnInit {
  error: CustomError = null;
  constructor(private errorService: ErrorsService) {
  }

  ngOnInit(): void {
    this.errorService.error
      .subscribe((error: CustomError) => {
        this.error = error;
      })
  }

}
