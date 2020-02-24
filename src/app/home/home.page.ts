import { Contact } from './../Contact';
import { CreateContactComponent } from './../components/create-contact/create-contact.component';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contacts: Contact[] = [
    {name:'Anish',phNumber: '9048442811' , email: 'mohammedanish@gmail.com'}
  ];
  constructor(
    private modal: ModalController
  ) {}

  async openCreateModal() {
    const modal = await this.modal.create({
      component: CreateContactComponent
    });
    modal.onDidDismiss().then( data => {
      if (data.data.name && data.data.phNumber) {
        this.contacts.push(data.data);
      }
      console.log(this.contacts);
    });
    return await modal.present();
  }

}
