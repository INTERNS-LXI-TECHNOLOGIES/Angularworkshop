import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[];
  private nextId: number;

  public obs = new BehaviorSubject<Todo[]>(this.todos);

  constructor() {
    this.todos = [
      new Todo(0, 'make dinner'),
      new Todo(1, 'go to store'),
      new Todo(2, 'its Drive time')
    ];
    this.nextId = 3;
    this.obs.next(this.todos);
  }
  public addTodo(text: string): void {
    const todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.obs.next(this.todos);
    this.nextId++;
  }

  public getTodos(): Todo[] {
    return this.todos;
  }
  public removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.obs.next(this.todos);

  }
}
