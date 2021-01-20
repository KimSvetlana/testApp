import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-main',
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
          <td><div>
            
          </div><td>
        </tr>
      </tbody>
    </table>
    <a routerLink="/addPerson" class='button'> Добавить сотрудника</a>
</div>  
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  persons: Person[] = [];
  constructor(private appService: AppService){}
  
  ngOnInit(): void {
    this.persons = this.appService.getPersonArr();
  }
}
