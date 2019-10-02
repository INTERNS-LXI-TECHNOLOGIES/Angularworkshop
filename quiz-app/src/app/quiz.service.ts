import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quiz } from './quiz';
import { QUIZES } from './mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizesUrl = 'api/quizes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getQuizes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.quizesUrl)
  }

  constructor(private http: HttpClient) { }
  addQuiz (quizes: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.quizesUrl, quizes, this.httpOptions);
  }
}
