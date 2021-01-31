import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Вспомогательный сервис для выполнения запросов к api
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  /**
   * Выполнить get запрос
   * @param path путь запроса
   * @param params параметры запроса
   */
  public get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${environment.baseUrl}${path}`, { params })
      .pipe(catchError((err) => {
        return throwError(err);
      }));
  }

  /**
   * Выполнить put запрос
   * @param path путь запроса
   * @param body тело запроса
   */
  public put<T>(path: string, body: object = {}): Observable<T> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<T>(
      `${environment.baseUrl}${path}`,
      JSON.stringify(body),
      { headers }
    ).pipe(catchError((err) => {
      return throwError(err);
    }));
  }

  /**
   * Выполнить post запрос
   * @param path путь запроса
   * @param body  тело запроса
   */
  public post<T>(path: string, body: object = {}): Observable<T> {
    return this.http.post<T>(
      `${environment.baseUrl}${path}`,
      body
    ).pipe(catchError((err) => {
      return throwError(err);
    }));
  }

  /**
   * Выполнить delete запрос
   * @param path путь запроса
   */
  public delete<T>(path: string): Observable<T> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete<T>(
      `${environment.baseUrl}${path}`,
      { headers }
    ).pipe(catchError((err) => {
      return throwError(err);
    }));
  }

}
