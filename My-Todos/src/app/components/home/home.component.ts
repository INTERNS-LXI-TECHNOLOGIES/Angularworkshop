import { Todo } from './../../Todo';
import { mocktodo } from './../../mocktodo';
import { TodoService } from './../../services/todo.service';
import {Component, ViewChild } from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  events: any;
  todos: Todo[] = mocktodo;

  todo: Todo = {
    time: '',
    subject: '',
    location: '',
    description: ''
  };

  constructor(private todoService: TodoService) {
    this.getTodos();
  }
  deleteEvent(event: any) {
    const itemIndex = this.todos.findIndex(el => el === event);
    this.todos.splice(itemIndex, 1);

  }

  updateModal(event, newValue) {
    event = new Todo();
    const itemIndex = this.todos.findIndex(el => el === event);
    this.todos[itemIndex] = newValue;

  }


  save() {
    console.log(this.todo);
    const tempTodo = new Todo();
    tempTodo.time = this.todo.time;
    tempTodo.subject = this.todo.subject;
    tempTodo.location = this.todo.location;
    tempTodo.description = this.todo.description;
    this.todoService.addNewEvent(tempTodo);

  }
  getTodos() {
    this.todoService.obs.subscribe(todos => {
        this.todos = todos;
    });
  }


ngOnInit() {

  }
}
