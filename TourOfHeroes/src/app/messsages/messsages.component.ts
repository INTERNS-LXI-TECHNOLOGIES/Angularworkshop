import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-messsages',
  templateUrl: './messsages.component.html',
  styleUrls: ['./messsages.component.css']
})
export class MesssagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
