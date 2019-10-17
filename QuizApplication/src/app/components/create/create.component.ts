import { QuizService } from './../../quiz.service';
import { Quizmodel } from './../../quizmodel';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

model: Quizmodel = new Quizmodel();
@Output() valueChange = new EventEmitter();

  constructor(private quizService: QuizService) { }

  str1: string;
  str2: string;
  str3: string;
  str4: string;
  qs: string;
  an: string;
  ngOnInit() {
  }

  add() {

    this.model.question = this.qs;
    this.model.options.push(this.str1);
    this.model.options.push(this.str2);
    this.model.options.push(this.str3);
    this.model.options.push(this.str4);
    this.model.answer = this.an;
    this.quizService.addQuizes(this.model).subscribe(
     ss=>{
       console.log("Subscribed");
      this.quizService.getQuizes().subscribe(
        data=>
        {
          console.log("Get data"+JSON.stringify( data));
          this.valueChange.emit();
        }

      );

     });
     }


}
