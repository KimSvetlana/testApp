import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AddPersonCardComponent } from './components/add-person-card/add-person-card.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'addPerson', component: AddPersonCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
