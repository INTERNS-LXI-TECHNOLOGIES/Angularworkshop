import { QuizService } from './../quiz.service';
import { Quiz } from './../quiz';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
quizes: Quiz[];
quiz: Quiz;
@Output() valueChange = new EventEmitter();
  constructor(private quizService: QuizService) { }
  getQuizes(): void {
    this.quizService.getQuizes()
    .subscribe(quizes => this.quizes = quizes);
  }

  ngOnInit() {
    this.getQuizes();
  }
  create( quiz: Quiz): void {
    this.quizService.addQuiz(this.quiz)
    .subscribe(quizes => {
      this.quizes.push(quizes);
      this.valueChange.emit();
    });
    console.log('added', this.quiz);
  }

}
