import { Component, OnInit } from '@angular/core';
import { Person } from './interfaces/person';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  template: `
  <div class = 'wrapper'>
    <table>
      <thead>
        <tr class = 'head'>
          <td><td>
          <td>Имя<td>
          <td>Фамилия<td>
          <td><td>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let person of persons" class=''>
          <td>i<td>
          <td>{{person.firstName}}<td>
          <td>{{person.lastName}}<td>
          <td>button<td>
        </tr>
      </tbody>
    </table>
    <a routerLink="/addPerson" class='button'> Добавить сотрудника</a>
</div>  
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testApp';
  persons: Person[] = [];
  constructor(private appService: AppService){}
  
  ngOnInit(): void {
    this.persons = this.appService.getPersonArr();
  }

}
