enum LogLevels {
  warning,
  error,
  success
}

import { Injectable } from '@angular/core';

@Injectable()

export class LoggerService {
  private _history: string[] = [];

  constructor() { }

  log(msg: string, level: number = 2) {
    const logMsg = `Level: ${LogLevels[level]}, 
    Message: ${msg}, timestamp: ${(new Date()).toISOString()}`;
    this._history.push(logMsg);
    console.log(logMsg);
    console.log(this._history);
  }
}
