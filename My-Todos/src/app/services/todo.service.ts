import { mocktodo } from './../mocktodo';
import { Todo } from './../Todo';
import { Injectable } from '@angular/core';
import {Component, ViewChild } from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';
import { FormControl } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  events: any;
  private todos: Todo[] = mocktodo;
  public obs = new BehaviorSubject<Todo[]>(this.todos);

  constructor() {
    this.getTodos();
   }
  timeInput = new FormControl();
  subjectInput = new FormControl();
  locationInput = new FormControl();
  descriptionInput = new FormControl();



  deleteEvent(event: any) {
    const itemIndex = this.todos.findIndex(el => el === event);
    this.todos = this.todos.splice(itemIndex, 1);
    this.obs.next(this.todos);
  }
  addNewEvent(todo: Todo) {
    const newEvent: Todo = {
      time: todo.time,
      subject: todo.subject,
      location: todo.location,
      description: todo.description
    };

    this.todos.push(newEvent);

    this.timeInput.setValue('');
    this.subjectInput.setValue('');
    this.locationInput.setValue('');
    this.descriptionInput.setValue('');
    this.obs.next(this.todos);


  }

  public getTodos(): Todo[] {
    return this.todos;
  }
}
