import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-table',
  template: `
  <div class = 'wrapper'>
    <table>
      <thead class = 'head'>
        <td></td>
        <td>Имя</td>
        <td>Фамилия</td>
        <td></td>
      </thead>
      <tbody>
        <tr *ngFor="let person of persons" class='' id = {{person.id}}>
          <td><mat-icon>account_circle</mat-icon></td>
          <td>{{person.firstName}}</td>
          <td>{{person.lastName}}</td>
          <td>
            <div class='icon-wrapper'>
              <mat-icon class="icon-button" (click)="deleteCard.show()">clear</mat-icon>
            </div>
            <div class='icon-wrapper'>
              <mat-icon class="icon-button" (click)="editCard.show()">create</mat-icon>
            </div>
          </td>
          <app-edit-card #editCard [id] = "person.id" (personChanged)="onPersonChanged($event)">
          </app-edit-card>
          <app-delete-person-card  #deleteCard [id] = "person.id" (personDeleted)="onPersonDeleted($event)">
          </app-delete-person-card>
        </tr>
      </tbody>
    </table>
    <button class='button' (click)="addCard.show()"> Добавить сотрудника</button>
    <app-add-card  #addCard (personAdded)="onPersonAdded($event)"></app-add-card>
  </div>`,
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
