import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { AddPersonCardComponent } from './components/add-person-card/add-person-card.component';
import { EditPersonCardComponent } from './components/edit-person-card/edit-person-card.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeletePersonCardComponent } from './components/delete-person-card/delete-person-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddPersonCardComponent,
    EditPersonCardComponent,
    DeletePersonCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
