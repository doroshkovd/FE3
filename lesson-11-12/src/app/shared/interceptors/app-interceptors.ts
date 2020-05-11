import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LogInterceptor } from "./log.interceptor";
import { AuthInterceptor } from "./auth.interceptor";
import { TimestampInterceptor } from "./timestamp.interceptor";
import { ErrorInterceptor } from "./error.interceptor";

export class AppInterceptors {
  static interceptors: any = [
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TimestampInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
};
