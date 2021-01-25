import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-main',
  template: `
  <div class = 'wrapper'>
    <table>
        <tr class = 'head'>
          <td></td>
          <td>Имя</td>
          <td>Фамилия</td>
          <td></td>
        </tr>

      <tbody>
        <tr *ngFor="let person of persons" class='' id = {{person.id}}>
          <td><mat-icon>account_circle</mat-icon></td>
          <td>{{person.firstName}}</td>
          <td>{{person.lastName}}</td>
          <td>
            <div>
              <mat-icon (click)="visibility.onClickEdit()" class="icon-button">create</mat-icon>
              <mat-icon  class="icon-button" (click)="showing.onClickDelete()" >clear</mat-icon>
            </div>
          </td>
          <app-edit-person-card #visibility [id] = "person.id"
          (personChanged)="onPersonChanged($event)"></app-edit-person-card>
          <app-delete-person-card  #showing [id] = "person.id" (personDeleted)="onPersonDeleted($event)"></app-delete-person-card>
        </tr>
      </tbody>
    </table>
    <button class='button' (click)="display.onClickAdd()"> Добавить сотрудника</button>
    <app-add-person-card  #display (personAdded)="onPersonAdded($event)"></app-add-person-card>
</div>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  persons: Person[] = [];

  constructor(private appService: AppService){}

  ngOnInit(): void {
    this.appService.getPersonArr().subscribe((personsArr: Person[] ) => {
      this.persons = personsArr;
    });
  }

  /**
   * Обработать добавление в таблицу
   */
  onPersonAdded(person: Person): void{
    this.persons.push(person);
  }

  /**
   * Обработать изменение информации о сотруднике в таблице
   */
  onPersonChanged(person: Person): void{
    this.persons.find(el => {
      if (el.id === person.id){
        el.firstName = person.firstName;
        el.lastName = person.lastName;
      }
    });
  }

  /**
   * Обработать удаление информации о сотруднике в таблице
   */
  onPersonDeleted(id: number): void{
    let i: number;
    this.persons.find(el => {
      if (el.id === id) {
        i = this.persons.indexOf(el);
      }
    });
    this.persons.splice(i, 1);
  }
}
