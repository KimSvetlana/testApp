import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/services/appService/app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  persons: Person[] = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getPersonArr().subscribe((personsArr: Person[]) => {
      this.persons = personsArr;
    });
  }

  /**
   * Обработать добавление в таблицу
   */
  onPersonAdded(person: Person): void {
    this.persons.push(person);
  }

  /**
   * Обработать изменение информации о сотруднике в таблице
   */
  onPersonChanged(person: Person): void {
    this.persons.find(el => {
      if (el.id === person.id) {
        el.firstName = person.firstName;
        el.lastName = person.lastName;
      }
    });
  }

  /**
   * Обработать удаление информации о сотруднике в таблице
   */
  onPersonDeleted(id: number): void {
    let i: number;
    this.persons.find(el => {
      if (el.id === id) {
        i = this.persons.indexOf(el);
      }
    });
    this.persons.splice(i, 1);
  }
}
