import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { personsArr } from './personsArray'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  /**
   * Получение массива Сотрудников
   */
  getPersonArr() : Person[] {
    return personsArr;
  }
}
