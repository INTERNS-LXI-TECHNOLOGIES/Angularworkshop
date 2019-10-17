import { Quizmodel } from './quizmodel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizesUrl = 'api/quizes';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
getQuizes(): Observable<Quizmodel[]> {
  return this.http.get<Quizmodel[]>(this.quizesUrl);
}
addQuizes(model: Quizmodel): Observable<Quizmodel[]> {
  return this.http.post<Quizmodel[]>(this.quizesUrl, model, this.httpOptions);
}
deleteQuiz(qu: Quizmodel | number): Observable<Quizmodel> {
  const id = typeof qu === 'number' ? qu : qu.id;
  const url = `${this.quizesUrl}/${id}`;
  return this.http.delete<Quizmodel>(url, this.httpOptions);
}
updateQuiz(qu: Quizmodel): Observable<any> {
  return this.http.put(this.quizesUrl, qu, this.httpOptions);
}
getQuiz(id: number): Observable<Quizmodel> {
  const url = `${this.quizesUrl}/${id}`;
  return this.http.get<Quizmodel>(url);
}
}
