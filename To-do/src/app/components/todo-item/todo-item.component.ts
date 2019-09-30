import { TodoService } from './../../services/todo.service';
import { Todo } from './../../classes/todo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
     todo: Todo;
     public todoText: string;
  constructor( private todoservice: TodoService) {
    this.todoText = '';
   }

  ngOnInit() {
  }
  private removeTodo(): void {
    this.todoservice.removeTodo(this.todo.id);
  }

}
