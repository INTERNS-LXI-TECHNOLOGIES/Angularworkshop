import { Component } from '@angular/core';
import { Quizmodel } from './quiz/quizmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-quiz';
  languages: string[] = ['Java', 'Cprogram', 'HTML'];
  quizlist: Quizmodel[] = [
    {language: 'Java', question: 'Inventor of java', options: ['Nayan.c', 'Armesh', 'Denish Rechie', 'Kiran.Dy'], answer: 'Denish Rechie'},
    {language: 'Cprogram', question: 'Inventor of c program', options: ['Ken Thomson', 'Rob Pike', 'James', 'Richard'], answer: 'Rob Pike'},
    {language: 'HTML', question: 'Which tag is used to create table', options: ['div', 'th', 'html', 'table'], answer: 'table'}
  ];
  selectedvalue: string;
}
