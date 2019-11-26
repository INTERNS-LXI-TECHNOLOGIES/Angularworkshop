import { TodoService } from './../../services/todo.service';
import { Todo } from './../../Todo';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() value: any;

  @Output() deleteEventInstanceEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateEventInstanceEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(todoService: TodoService) { }

  ngOnInit() {

  }
  handleDeleteClick() {
    this.deleteEventInstanceEvent.emit(this.value);
  }


  updateEventTrigger() {
    this.updateEventInstanceEvent.emit(this.value);
  }

}
