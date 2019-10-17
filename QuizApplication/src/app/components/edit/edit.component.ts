import { QuizService } from './../../quiz.service';
import { Quizmodel } from './../../quizmodel';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
@Input() qu: Quizmodel;
  constructor(private route: ActivatedRoute, private location: Location, private quizService: QuizService) {}

  ngOnInit() {
    this.getQuiz();
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.quizService.updateQuiz(this.qu)
      .subscribe(() => this.goBack());
  }
  getQuiz(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quizService.getQuiz(id)
      .subscribe(qu => this.qu = qu);
  }
}
