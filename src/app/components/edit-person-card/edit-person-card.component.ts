import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-edit-person-card',
  template: `
  <div class = "card-shadow" [style.display]="visibility?'block':'none'"></div>
    <div class = 'card' [style.display]="visibility?'block':'none'">
      <div class='card-header'><h3>Редактирование сотрудника</h3></div>
      <div class='card-body'>
        <a href="#" (click)="onClick()"> Назад к списку</a>
        <form (ngSubmit)="onSubmit($event)">
          <input type = 'text' name = 'firstName' [(ngModel)]="firstName" value = {{this.person?.firstName}}>
          <input  type = 'text' name = 'lastName' [(ngModel)]="lastName" value = {{this.person?.lastName}}>
          <button value="Сохранить"  type='submit'>Сохранить</button>
        </form>
    </div>
  </div>`,
  styleUrls: ['./edit-person-card.component.scss']
})

export class EditPersonCardComponent implements OnInit {
  @Output() personChanged = new EventEmitter<Person>();
  @Input() id: number;
  firstName: string;
  lastName: string;
  visibility = false;
  person: Person | null = null ;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getPerson(this.id);
  }

  /**
   * Получить информацию о сотруднике по id
   */
  getPerson(id: number): void {
    this.appService.getPersonInfo(id).subscribe((personInfo: Person ) => {
      return this.person = personInfo;
    });
  }

  /**
   * Обработать клик по кнопке редактирования
   */
  onClickEdit(): void {
    this.visibility = true;
  }

  /**
   * Обработать клик 'вернуться к списку'
   */
  onClick(): void {
    this.visibility = false;
  }

  /**
   * Редактировать информацию о сотруднике, отправить запрос на сервер
   */
  onSubmit(event: any): void {
    const obj = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
    };
    this.appService.putPersonInfo(this.id, obj).subscribe((person: Person ) => {
      this.personChanged.emit(person);
    });
    this.visibility = false;
  }
}
