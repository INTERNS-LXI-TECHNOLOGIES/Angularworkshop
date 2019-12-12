import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  add: number;
  constructor() {}
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
  add = this.getNumber().subscribe(add => this.add = add);
}

}
