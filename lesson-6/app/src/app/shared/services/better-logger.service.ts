import { Injectable } from '@angular/core';
import { LoggerService } from "./logger/logger.service";

@Injectable({
  providedIn: 'root'
})
export class BetterLoggerService extends LoggerService {

  constructor() {
    super();
  }

  dir(msg: any) {
    console.dir(msg);
  }
}
