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
              <mat-icon (click)="visibility.onMouseClick()" class="icon-button">create</mat-icon>
              <mat-icon  class="icon-button">clear</mat-icon>
            </div>
          </td>
          <app-redact-person-card #visibility [id] = "person.id"></app-redact-person-card>
        </tr>
      </tbody>
    </table>
    <button class='button' (click)="display.onClick()"> Добавить сотрудника</button>
    <app-add-person-card  #display (onChanged)="onChanged($event)"></app-add-person-card>
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
   * Обработать изменение таблицы
   */
  onChanged(personInfo: Person): void{
    this.persons.push(personInfo);
  }
}
