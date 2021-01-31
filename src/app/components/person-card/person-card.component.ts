import { Person } from 'src/app/interfaces/person';

export abstract class PersonCardComponent {
  display = false;
  person: Person | null
  header: string;

  /**
   * Показать карточку добавления/редактирования сотрудника
   */
  show(person: Person = null): void {
    this.person = person;
    this.display = true;
  }

  /**
   * Закрыть окно
   */
  close(): void {
    this.display = false;
  }

  /**
   * Добавить/отредактировать сотрудника, отправить форму на сервер
   */
  abstract onSubmit(event: any): void;

}
