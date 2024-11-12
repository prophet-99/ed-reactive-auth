import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { getFromLocalStorage } from '@core/utils/loca-storage.util';

@Injectable()
export class HttpSecurityInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const excludeUrls = ['auth/login'];
    if (excludeUrls.some((url) => request.url.includes(url)))
      return next.handle(request);

    const newRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${getFromLocalStorage('ED_REACTIVE_AUTH_JWT')}`,
      },
    });
    return next.handle(newRequest);
  }
}
