/*
Copyright Siemens AG 2018
SPDX-License-Identifier: MIT
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';
import { UserInfo } from './userinfo';

@Injectable({ providedIn: 'root' })
export class TodoService {

  constructor(
    private http: HttpClient) { }

  getTodos (): Observable<Todo[]> {
    return this.http.get<Todo[]>('./v1/todo');
  }

  addTodo (todo: Todo): Observable<String> {
    return this.http.post('./v1/todo', todo, {
      responseType: 'text',
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    });
  }

  deleteTodo (todo: Todo): Observable<String> {
    const _id = typeof todo === 'string' ? todo : todo._id;
    const url = `./v1/todo/${_id}`;
    return this.http.delete(url, {
      responseType: 'text'
    });
  }

  getMe (): Observable<UserInfo> {
    return this.http.get<UserInfo>('./v1/me');
  }
}
