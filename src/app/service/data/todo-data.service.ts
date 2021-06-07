import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from './../../app.constants'
import { JPA_API_URL } from './../../app.constants'

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username: string) {
      return this.http.get<Todo[]>(`${JPA_API_URL}/users/${username}/todos`);
    //console.log("Testing bean...") 
  }

  public deleteTodoItem(username, todo_id) {
    return this.http.delete(`${JPA_API_URL}/users/${username}/todos/${todo_id}`);
  }

  public retrieveTodoItem(username, todo_id) {
    return this.http.get<Todo>(`${JPA_API_URL}/users/${username}/todos/${todo_id}`);
  }

  public updateTodo(username, todo_id, todo) {
    return this.http.put(`${JPA_API_URL}/users/${username}/todos/${todo_id}`, todo);
  }

  public createTodo(username, todo) {
    return this.http.post(`${JPA_API_URL}/users/${username}/todos`
    , todo);
  }
}
