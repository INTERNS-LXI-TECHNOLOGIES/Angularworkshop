import { QuizService } from './../../quiz.service';
import { Quizmodel } from './../../quizmodel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
quizes: Quizmodel[];
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.getQuizes();
  }
   getQuizes(): void {
    this.quizService.getQuizes().subscribe(qu =>

      {
        console.log("workinggggggggggggggggggggggggggggggggg");
        this.quizes = qu});
  }
  delete(qu: Quizmodel): void {
    this.quizes = this.quizes.filter(h => h !== qu);
    this.quizService.deleteQuiz(qu).subscribe();
  }
}
