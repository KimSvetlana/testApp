import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/services/app.service';
import { PersonCardComponent } from './person-card.component';

@Component({
  selector: 'app-add-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class AddPersonComponent extends PersonCardComponent {
  @Output() personAdded = new EventEmitter<Person>();

  constructor(private appService: AppService) {
    super();
    this.header = 'Создание сотрудника';
  }

  onSubmit(event: any): void {
    const obj = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
    };
    this.appService.postPersonInfo(obj).subscribe((person: Person) => {
      this.personAdded.emit(person);
    });
    this.close();
  }
}
