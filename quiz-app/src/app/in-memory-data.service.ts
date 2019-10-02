import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Quiz } from './quiz';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const quizes = [
   {language: 'Java', question: 'Inventor of java', options: ['Nayan.c', 'Armesh', 'Denish Rechie', 'Kiran.Dy'], answer: 'Denish Rechie'},
   {language: 'Java', question: 'Java is a collection of___', options: ['object', 'query', 'statement', 'data'], answer: 'object'},
   {language: 'Cprogram', question: 'Inventor of c program', options: ['Ken Thomson', 'Rob Pike', 'James', 'Richard'], answer: 'Rob Pike'},
      {language: 'HTML', question: 'Which tag is used to create table', options: ['div', 'th', 'html', 'table'], answer: 'table'}
    ];
    return {quizes};
  }

  constructor() { }
}
