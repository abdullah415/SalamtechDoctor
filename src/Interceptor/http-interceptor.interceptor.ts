import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpEventType,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // const authReq = request.clone({ headers: request.headers.set("Authorization", localStorage.getItem("Authorization") as string) });

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        let message = '';
        if (err.status === 401) {
          // handle client-side error
          this.router.navigateByUrl('')
          
          message = `Error: ${err.error.message}`;
        } else {
          // handle server-side error
          message = `Error Status: ${err.status}\nMessage: ${err.message}`;
        }
        // console.log(message);

        // return the error back to the caller
        return throwError(message);
      })
    );
  }
}
