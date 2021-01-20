import { Component, OnInit } from '@angular/core';
import { Person } from './interfaces/person';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testApp';
}
