import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  // ¿Las variables con la dirección de la API y los endpoints podría ir en el environment?
  private api = 'https://jsonplaceholder.typicode.com/';
  private endpoint = 'todos';

  private url = `${this.api}${this.endpoint}`;

  constructor(private http: HttpClient) {}

  getAllTodos() {
    return this.http.get<Todo[]>(this.url);
  }

  createTodo(todo: Todo) {
    return this.http.post<Todo>(this.url, todo);
  }

  updateTodo(todo: Todo) {
    const url = `${this.url}/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

  deleteTodo(todoId: string) {
    const url = `${this.url}/${todoId}`;
    return this.http.delete(url);
  }

}
