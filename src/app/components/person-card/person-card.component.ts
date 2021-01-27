import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export abstract class PersonCardComponent{
  display = false;
  person: Person;
  header: string;

  constructor() {
  }

  /**
   * Обработать клик по карточке добавления сотрудника
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
   * Добавить сотрудника, отправить форму на сервер
   */
 abstract onSubmit(event: any): void; 

}

// @Component({
//   selector: 'app-edit-card',
//   templateUrl: './person-card.component.html',
//   styleUrls: ['./person-card.component.scss']
// })
// export class EditPersonComponent extends PersonCardComponent implements OnInit {
//   @Output() personChanged = new EventEmitter<Person>();
//   @Input() id: number;

//   constructor(private appService: AppService) {
//     super();
//     this.header = "Редактирование сотрудника";
//   }

//   ngOnInit(): void {
//     this.getPerson(this.id);
//   }

//   onSubmit(event: any): void {
//     const obj = {
//       firstName: event.target.firstName.value,
//       lastName: event.target.lastName.value,
//     };
//     this.appService.putPersonInfo(this.id, obj).subscribe((person: Person ) => {
//       this.personChanged.emit(person);
//     });
//     this.close();
//   }

//   /**
//    * Получить информацию о сотруднике по id
//    */
//   private getPerson(id: number): void {
//     this.appService.getPersonInfo(id).subscribe((personInfo: Person ) => {
//       return this.person = personInfo;
//     });
//   }
// }



