import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppService } from 'src/app/services/appService/app.service';

@Component({
  selector: 'app-delete-person-card',
  templateUrl: './delete-person-card.component.html',
  styleUrls: ['./delete-person-card.component.scss']
})

export class DeletePersonCardComponent {
  @Output() personDeleted = new EventEmitter<any>();
  @Input() id: number;
  display = false;

  constructor(private appService: AppService) { }

  /**
   * Отобразить карточку удаления сотрудника из таблицы
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
