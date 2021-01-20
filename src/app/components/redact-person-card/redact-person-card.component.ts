import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redact-person-card',
  template: `
  <div class = 'addCard'>
  <h3>Редактирование сотрудника</h3>
  <a href = '/'>Назад к списку</a>
  <input value = 'Иван'>
  <input  value = 'Ivanov'>
  <button>Сохранить</button>  
</div>`,
  styleUrls: ['./redact-person-card.component.scss']
})
export class RedactPersonCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
