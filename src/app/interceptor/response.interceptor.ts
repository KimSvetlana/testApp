import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Интерцептор, перехватывающий ответы с сервера
 */

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private snackbar: MatSnackBar) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({});

    return next
      .handle(request)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (event.status === 200 || event.status === 201) {
              this.snackbar.open(`Успешное выполнение запроса`, 'Закрыть', {
                duration: 5000,
              });
            }
          }
          return event;
        }),
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 0) {
              this.snackbar.open(` Ошибка: ${err.name}. Нет ответа с сервера.`, 'Закрыть', {
                duration: 5000,
              });
            }
            if (err.status === 400) {
              this.snackbar.open(`Ошибка:${err.status} ${err.name}. Неверный запрос.}`, 'Закрыть', {
                duration: 5000,
              });
            }
            if (err.status === 404) {
              this.snackbar.open(`Ошибка:${err.status} ${err.name}. Сущность не найдена в системе`, 'Закрыть', {
                duration: 5000,
              });
            }
            if (err.status === 500) {
              this.snackbar.open(`Ошибка:${err.status} ${err.name}. Серверная ошибка`, 'Закрыть', {
                duration: 5000,
              });
            }
          }
          return throwError(err);
        }
        ));

  }
}
