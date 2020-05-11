import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class TimestampInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let copyReq = null;
    if (['PUT', 'POST'].includes(req.method)) {
      copyReq = req.clone({body: {...req.body, timestamp: (new Date()).getTime()}})
    }
    return next.handle(copyReq || req);
  }
}
