import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-add-person-card',
  template: `
<div class = "card-shadow" [style.display]="display?'block':'none'"></div>
<div class = 'card' [style.display]="display?'block':'none'">
  <div class='card-header'><h3>Создание сотрудника</h3></div>
  <div class='card-body'>
    <a href = '#' (click)="onMouseClick()">Назад к списку</a>
    <form (ngSubmit)="onSubmit($event)">
      <input type = 'text' name = 'firstName' placeholder ='Введите имя сотрудника'>
      <input  type = 'text' name = 'lastName' placeholder ='Введите фамилию сотрудника'>
      <button value="Сохранить"  type='submit'>Сохранить</button>
    </form>
  </div>
</div>
  ` ,
  styleUrls: ['./add-person-card.component.scss']
})
export class AddPersonCardComponent{
  @Output() personAdded = new EventEmitter<Person>();
  display = false;
  person: Person;

  constructor(private appService: AppService) { }

  /**
   * Обработать клик по карточке добавления сотрудника
   */
  onClickAdd(): void{
    this.display = true;
  }

  /**
   * Вернуться к списку без измения таблицы
   */
  onMouseClick(): void{
    this.display = false;
  }

  /**
   * Добавить сотрудника, отправить форму на сервер
   */
  onSubmit(event: any): void {
    const obj = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
    };
    this.appService.postPersonInfo(obj).subscribe((person: Person ) => {
      this.personAdded.emit(person);
    });

    this.display = false;
  }
}
