import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/interfaces/person';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-redact-person-card',
  template: `
  <div class = 'card'>
  <h3>Редактирование сотрудника</h3>
  <a href = '/'>Назад к списку</a>
  <input value = {{this.person.firstName}}>
  <input  value = {{this.person.lastName}}>
  <button>Сохранить</button>  
</div>`,
  styleUrls: ['./redact-person-card.component.scss']
})
export class RedactPersonCardComponent implements OnInit {
  person : Person ;

  constructor(private appService: AppService,  private route: ActivatedRoute) {
    this.getPerson(this.route.snapshot.params.id)
   }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id)
   }

  /**
   * Получить информацию о сотруднике по id
   */
  private getPerson(id: number): void {
    this.person = this.appService.getPersonInfo(id)  
  }
}
