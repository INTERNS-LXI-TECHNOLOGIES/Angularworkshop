import { Todo } from 'src/app/classes/todo';
import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos: Todo [] = [];


  constructor( private todoService: TodoService) {

    this.getTodos();
  }

  getTodos() {
    this.todoService.obs.subscribe(todos => {
        this.todos = todos;
    });
  }
}
