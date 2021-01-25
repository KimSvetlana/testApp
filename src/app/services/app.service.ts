import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/person';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private apiService: ApiService) { }

  /**
   * Получение массива Сотрудников
   */
  getPersonArr(): Observable<Person[]> {
    return this.apiService.get<Person[]>(`person`);
  }

  /**
   * Получение подробной информации о сотруднике
   */
  getPersonInfo(id: number): Observable<Person> {
    return  this.apiService.get<Person>(`person/${id}`);
  }

  /**
   * Добавление информации о сотруднике
   */
  postPersonInfo(obj: object): Observable<Person> {
    return  this.apiService.post<Person>(`person/`, obj);
  }

  /**
   * Обновление информации о сотруднике
   */
  putPersonInfo(id: number, obj: Person): Observable<Person> {
    return  this.apiService.put<Person>(`person/${id}`, obj);
  }
}
