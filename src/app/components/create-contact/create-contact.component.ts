import { ModalController } from '@ionic/angular';
import { Contact } from './../../Contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss'],
})
export class CreateContactComponent implements OnInit {

  contact: Contact = {};
  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {}

  dissmiss() {
    this.modal.dismiss();
  }

  create() {
    this.modal.dismiss(this.contact);
  }

}
