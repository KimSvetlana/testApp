import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-redact-person-card',
  template: `
  <div class = "substrate" [style.display]="visibility?'block':'none'"></div>
    <div class = 'card' [style.display]="visibility?'block':'none'">
      <h3>Редактирование сотрудника</h3>
      <a href="#" (click)="onClick()"> Назад к списку</a>
      <input value = {{this.person?.firstName}}>
      <input  value = {{this.person?.lastName}}>
      <button>Сохранить</button>
    </div>`,
  styleUrls: ['./redact-person-card.component.scss']
})
export class RedactPersonCardComponent implements OnInit {
  @Input() id: number;
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
  onMouseClick(): void {
    this.visibility = true;
  }

  /**
   * Обработать клик 'вернуться к списку'
   */
  onClick(): void {
    this.visibility = false;
  }
}
