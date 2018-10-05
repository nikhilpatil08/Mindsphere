/*
Copyright Siemens AG 2018
SPDX-License-Identifier: MIT
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { UserInfoComponent } from './userinfo/userinfo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TodosComponent,
    UserInfoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
