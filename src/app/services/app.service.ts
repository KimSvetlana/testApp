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
  getPersonInfo(id: number): Person {
    return {
        id: 2,
        firstName: 'Dmitriy',
        lastName: 'Dmitriev'
      };
  }
}
