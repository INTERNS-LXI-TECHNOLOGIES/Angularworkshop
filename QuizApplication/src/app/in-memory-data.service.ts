import { Quizmodel } from './quizmodel';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const quizes = [
   {id: 1, question: 'Inventor of java', options: ['Nayan.c', 'Armesh', 'Denish Rechie', 'Kiran.Dy'], answer: 'Denish Rechie'},
   {id: 2, question: 'Java is a collection of___', options: ['object', 'query', 'statement', 'data'], answer: 'object'},
   {id: 3, question: 'Inventor of c program', options: ['Ken Thomson', 'Rob Pike', 'James', 'Richard'], answer: 'Rob Pike'},
   {id: 4, question: 'Which tag is used to create table', options: ['div', 'th', 'html', 'table'], answer: 'table'}
    ];
    return {quizes};
  }
  genId(quizes: Quizmodel[]): number {
    return quizes.length > 0 ? Math.max(...quizes.map(quiz => quiz.id)) + 1 : 1;
  }
  constructor() { }
}
