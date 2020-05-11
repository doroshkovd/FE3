import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { ErrorsService } from "../errors/errors.service";

@Injectable()

export class ErrorInterceptor implements HttpInterceptor {
  constructor(private errorsService: ErrorsService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: any) => {
        this.errorsService.showError({message: error.message, title: error.error.error});
        return throwError(error);
      })
    );
  }
}
