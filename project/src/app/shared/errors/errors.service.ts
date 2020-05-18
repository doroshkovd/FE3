import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CustomError } from "./error.interface";

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  private _error: CustomError = null;
  private _errorSubject: BehaviorSubject<CustomError> = new BehaviorSubject(this._error);
  private _errorTimer: any;
  private _style: string;

  get error() {
    return this._errorSubject;
  }

  showError(error: CustomError, styleClass = 'danger') {
    this._error = error;
    this._style = styleClass;
    this._errorSubject.next({...this._error, style: styleClass});
    this._errorTimer = setTimeout(() => {
      this.hideError();
    }, 4000);
  }

  hideError() {
    this._errorSubject.next(null);
    this._error = null;
  }


}
