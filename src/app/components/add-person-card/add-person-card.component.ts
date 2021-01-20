import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-person-card',
  template:`
<div class = 'addCard'>
  <h3>Создание сотрудника</h3>
  <a href = '/'>Назад к списку</a>
  <input placeholder ='Введите имя сотрудника'>
  <input  placeholder ='Введите фамилию сотрудника'>
  <button>Сохранить</button>  
</div>
  ` ,
  styleUrls: ['./add-person-card.component.scss']
})
export class AddPersonCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
