import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-delete-person-card',
  template: `
  <div class = "card-shadow" [style.display]="showing?'block':'none'"></div>
  <div class = 'card' [style.display]="showing?'block':'none'">
    <p> Вы уверены, что хотите удалить информацию о сотруднике?</p>
    <button value="OK" (click)="onSubmit(this.id)">OK</button>
    <button value="NO" (click)="onClickNo()">NO</button>
  </div>`,
  styleUrls: ['./delete-person-card.component.scss']
})

export class DeletePersonCardComponent implements OnInit {
  @Output() personDeleted = new EventEmitter<any>();
  @Input() id: number;
  showing = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void { }

  /**
   * Обработать удаление сотрудника из таблицы
   */
  onClickDelete(): void {
    this.showing = true;
  }

  /**
   * Закрыть окно удаления сотрудника
   */
  onClickNo(): void {
    this.showing = false;
  }

  /**
   * Обработать событие удаления сотрудника
   */
  onSubmit(id: number): void{
    this.appService.deletePersonInfo(id).subscribe(() => {
      this.personDeleted.emit(id);
    });
    this.showing = false;
  }
}
