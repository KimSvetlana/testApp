import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export abstract class PersonCardComponent{
  display = false;
  person: Person;
  header: string;

  constructor() {}

  /**
   * Показать карточку добавления/редактирования сотрудника
   */
  show(): void{
    this.display = true;
  }

  /**
   * Закрыть окно
   */
  close(): void{
    this.display = false;
  }

  /**
   * Добавить/отредактировать сотрудника, отправить форму на сервер
   */
 abstract onSubmit(event: any): void;

}
