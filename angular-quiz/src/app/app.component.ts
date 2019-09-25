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
    {language: 'Java', question: 'Java is a collection of___', options: ['object', 'query', 'statement', 'data'], answer: 'object'},

    {language: 'Cprogram', question: 'Inventor of c program', options: ['Ken Thomson', 'Rob Pike', 'James', 'Richard'], answer: 'Rob Pike'},
    {language: 'HTML', question: 'Which tag is used to create table', options: ['div', 'th', 'html', 'table'], answer: 'table'}
  ];
  selectedvalue: string;
  selectedlanques: any[];
  question: string;
  option: any[];
  i: number;
  quizlength: number;
  gettinglanguage() {
    this.selectedlanques =  this.quizlist.filter(d => (d.language === this.selectedvalue));
    this.question = this.selectedlanques[0].question;
    this.option = this.selectedlanques[0].options;
    this.i = 0;
    this.quizlength = this.selectedlanques.length;
     }
     next()
     {
       this.i++;
       this.question = this.selectedlanques[this.i].question;
       this.option = this.selectedlanques[this.i].options;
     }
     previous()
     {
       this.i--;
       this.question = this.selectedlanques[this.i].question;
       this.option = this.selectedlanques[this.i].options;
     }
}
