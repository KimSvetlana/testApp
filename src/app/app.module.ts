import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { AddPersonCardComponent } from './components/add-person-card/add-person-card.component';
import { RedactPersonCardComponent } from './components/redact-person-card/redact-person-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddPersonCardComponent,
    RedactPersonCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
