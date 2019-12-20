import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
isImage = true;
  constructor(public loadingController: LoadingController) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.presentLoadingWithOptions();
    this.changingValue();
  }

  changingValue() {
    setTimeout(() => {
      this.isImage = false;
    }, 3000);
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      // spinner: 'lines-small',
      duration: 2000,
      // message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
}
