import { InjectionToken } from "@angular/core";

export const CONFIG = {
  appName: 'Test name',
};

export const TOKEN = new InjectionToken<any>('config');
