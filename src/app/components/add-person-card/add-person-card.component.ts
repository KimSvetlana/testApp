import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-add-person-card',
  template: `
<div class = "substrate" [style.display]="display?'block':'none'"></div>
<div class = 'card' [style.display]="display?'block':'none'">
  <h3>Создание сотрудника</h3>
  <a href = '#' (click)="onMouseClick()">Назад к списку</a>
<form method = 'post' action = 'http://localhost:3000/person'>
  <input type = 'text' name = 'firstName' placeholder ='Введите имя сотрудника'>
  <input  type = 'text' name = 'lastName' placeholder ='Введите фамилию сотрудника'>
  <input value="Сохранить" type='submit'>
</form>
</div>
  ` ,
  styleUrls: ['./add-person-card.component.scss']
})
export class AddPersonCardComponent{
  display = false;

  constructor(private appService: AppService) { }

  onClick(): void{
    this.display = true;
  }

  onMouseClick(): void{
    this.display = false;
  }
}
