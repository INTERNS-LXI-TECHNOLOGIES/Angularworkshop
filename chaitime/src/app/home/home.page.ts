import { LoadingController } from '@ionic/angular';
import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(public loadingController: LoadingController) {}
  add: number;
isImage = true;
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.presentLoadingWithOptions();
    this.changingValue();
  }
   public getNumber(): any {
    // tslint:disable-next-line: no-shadowed-variable
    const  numberObservable = new Observable( observable => {
    setTimeout(() => {
    const a = 10 ;
    const b = 20 ;
    observable.next(a + b) ;
    observable.complete();
} , 1000);
});
    return numberObservable ;
}
display() {
  this.add = this.getNumber().subscribe(add => this.add = add);
}
 delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms));
}
changingValue() {
  setTimeout(() => {
    this.isImage = false;
  }, 3000);
}

async presentLoadingWithOptions() {
  const loading = await this.loadingController.create({
    spinner: 'lines-small',
    duration: 2000,
    message: 'Please wait...',
    translucent: true,
    cssClass: 'custom-class custom-loading'
  });
  return await loading.present();
}
}
