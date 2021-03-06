import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TableComponent } from './components/table/table.component';
import { EditPersonComponent } from './components/person-card/edit-person.component';
import { AddPersonComponent } from './components/person-card/add-person.component';
import { DeletePersonCardComponent } from './components/delete-person-card/delete-person-card.component';
import { ResponseInterceptor } from './interceptor/response.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DeletePersonCardComponent,
    EditPersonComponent,
    AddPersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [FormsModule],
  providers: [
    HttpClientModule,
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
