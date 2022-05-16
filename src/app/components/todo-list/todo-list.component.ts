import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

  todoList!: Todo[];
  todoName!: string;
  private autoincrement!: number;

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todoService.getAllTodos()
      .subscribe( todos => {
        this.todoList = todos;
        this.autoincrement = todos.length;
      });
  }

  addTodo() {
    const newTodo: Todo = {
      userId: '1',
      id: (this.autoincrement++).toString(),
      title: this.todoName,
      completed: false,
    };

    this.todoService.createTodo(newTodo).subscribe(
      (todo) => {
        this.todoList.unshift(todo);
        this.todoName = '';
        console.log('addTodo: ',todo);
      },
      (error) => { console.log('addTodo Error: ', error); }
    );
  }

  updateTodo(todo: Todo, todoIndex: number) {
    this.todoService.updateTodo(todo).subscribe((todoUpdated) => {
      console.log(`Response de actualizar todoId: ${todo.id}: `, todoUpdated);
      console.log(`Actualizar de la vista el índice: ${todoIndex}`);
      alert(`Tarea ${(todo.completed) ? 'completada':'reprogramada'}
        Inspeccione la consola para más detalles...
      `);
      this.todoList[todoIndex] = todoUpdated;
    });
  }

  deleteTodo(todoId: string, todoIndex: number) {
    this.todoService.deleteTodo(todoId).subscribe((rpta) => {
      console.log(`Response de eliminar todoId: ${todoId}: `, rpta);
      console.log(`Eliminar de la vista el índice: ${todoIndex}`);
      alert(`Tarea eliminada
        Inspeccione la consola para más detalles...
      `);
      this.todoList.splice(todoIndex, 1);
    });
  }
}
