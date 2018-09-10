import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const jwt = localStorage.getItem('id_token');
        if (!!jwt) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${jwt}`
                }
            });
        }
        return next.handle(req);
    }
}