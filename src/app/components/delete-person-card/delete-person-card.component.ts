import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-delete-person-card',
  template: `
  <div class = "card-shadow" [style.display]="display?'block':'none'"></div>
  <div class = 'card' [style.display]="display?'block':'none'">
    <p> Вы уверены, что хотите удалить информацию о сотруднике?</p>
    <button value="OK" (click)="onClickOk(this.id)">OK</button>
    <button value="NO" (click)="onClickNo()">NO</button>
  </div>`,
  styleUrls: ['./delete-person-card.component.scss']
})

export class DeletePersonCardComponent {
  @Output() personDeleted = new EventEmitter<any>();
  @Input() id: number;
  display = false;

  constructor(private appService: AppService) { }

  /**
   * Обработать удаление сотрудника из таблицы
   */
  show(): void {
    this.display = true;
  }

  /**
   * Закрыть окно удаления сотрудника
   */
  onClickNo(): void {
    this.display = false;
  }

  /**
   * Обработать событие удаления сотрудника
   */
  onClickOk(id: number): void {
    this.appService.deletePersonInfo(id).subscribe(() => {
      this.personDeleted.emit(id);
    });
    this.display = false;
  }
}
