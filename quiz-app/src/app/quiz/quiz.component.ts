import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QuizService } from './../quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizes: Quiz[];



languages: string[] = ['Java', 'Cprogram', 'HTML'];

selectedvalue: string;
  selectedlanques: any[];
  question: string;
  option: any[];
  i: number;
  quizlength: number;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.getQuizes();
  }

  getQuizes(): void {
    this.quizService.getQuizes()
        .subscribe(quizes => this.quizes = quizes);
  }

  gettinglanguage() {
    this.selectedlanques =  this.quizes.filter(d => (d.language === this.selectedvalue));
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
     marks: number = 0;

     check(str: string)
     {
       for (var i = 0; i < this.quizes.length; i++)
       {
         if(str === this.quizes[i].answer)
         {

           this.marks++;
         }
       }
     }

     calculatemark()
     {
       document.writeln('your score is ' + this.marks);
     }


}
